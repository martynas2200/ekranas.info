import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
export interface Lesson {
  className: string;
  lessonNr:	number;
  discipline:	{
    id:	number;
    teacher: string;
    room: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnDestroy {
  // private socket: SocketIOClient.Socket;
  public lessons: Array<Lesson> = [];
  public notifications: Array<any> = [];
  public notificationSubject: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  private busyWithNotifications = false;
  private interval1: any;
  private interval2: any;

  constructor(private http: HttpClient, private settings: SettingsService) {
    // this.socket = io('http://localhost:3000');
    // this.socket.on('chat message', msg => {
    //   console.log(msg);
    // });
    this.interval1 = setInterval(() => this.getNotifications(), 60000);
    this.getNotifications();
    this.interval2 = setInterval(() => this.getTimetable(), 300000);
  }
  getTimetable() {
    this.http.get('/api/screen/' + this.settings.key + '/lessons').subscribe((success: any) => {
      if (success.lessons) {
        this.lessons = success.lessons;
      }
    }, error => {
      this.lessons = [];
      // - Show Error
    });
  }
  getNotifications() {
    if (this.busyWithNotifications) {
      setTimeout(() => this.getNotifications(), 3000);
      console.log('a');
      return;
    }
    if (this.settings.minimize.status) {
      console.log('b');
      return;
    }
    const testBox = document.getElementById('notificationsBox');
    if (testBox === null) {
      // console.error('Nerastas pranešimų konteineris');
      setTimeout(() => this.getNotifications(), 3000);
      console.log('c');
      return;
    }
    const documentHeight = testBox.clientHeight - 100;
    // console.log('tinkamas aukštis', documentHeight);
    this.busyWithNotifications = true;
    this.http.get('/api/screen/' + this.settings.key + '/notifications').subscribe((success: any) => {
      if (success.notifications) {
        this.notifications = success.notifications;
        // console.log(this.notifications);
        const notificationBoxes = [];
        // main.last = data.last;
        if (success.notifications.length > 0) {
          let box = [];
          let sum = 0;
          success.notifications.forEach(notification => {
            if (notification.type === 'image') {
              notification.images.forEach(image => {
                notificationBoxes.push([{
                  note: '',
                  image: image.url
                }]);
              });
            } else {
              const a = document.createElement('div');
              a.style.visibility = 'hidden';
              a.className = 'box';
              testBox.appendChild(a);
              a.innerHTML = notification.note;
              a.appendChild(document.createTextNode('Hello'));
              const height = a.clientHeight;
              // console.log(height);
              if (sum + height > documentHeight) {
                // No space, reset
                notificationBoxes.push(box);
                box = [];
                sum = 0;
              }
              box.push(notification);
              sum += height;
              a.parentNode.removeChild(a);
            }
          });
          if (box.length !== 0) {
            notificationBoxes.push(box);
          }
        }
        this.notificationSubject.next(notificationBoxes);
      }
      this.busyWithNotifications = false;
    }, error => {
      this.notifications = [];
      this.busyWithNotifications = false;
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval1);
    clearInterval(this.interval2);
  }

}
