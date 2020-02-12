import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsService implements OnDestroy {

  // activated = false;
  // fail = false;
  status: 'Waiting' | 'Failed' | 'Ok' = 'Waiting';
  key = '';
  // tslint:disable-next-line: max-line-length
  // private lessonsTime: Array<any> = [{h: 0, m: 0, lesson: false, lessonN: 1}, {h: 8, m: 0, lesson: true, lessonN: 1}, {h: 8, m: 45, lesson: false, lessonN: 2}, {h: 8, m: 55, lesson: true, lessonN: 2}, {h: 9, m: 40, lesson: false, lessonN: 3}, {h: 9, m: 50, lesson: true, lessonN: 3}, {h: 10, m: 35, lesson: false, lessonN: 4}, {h: 10, m: 55, lesson: true, lessonN: 4}, {h: 11, m: 40, lesson: false, lessonN: 5}, {h: 12, m: 0, lesson: true, lessonN: 5}, {h: 12, m: 45, lesson: false, lessonN: 6}, {h: 12, m: 55, lesson: true, lessonN: 6}, {h: 13, m: 40, lesson: false, lessonN: 7}, {h: 13, m: 50, lesson: true, lessonN: 7}, {h: 14, m: 35, lesson: false, lessonN: 8}, {h: 14, m: 45, lesson: true, lessonN: 8}, {h: 15, m: 30, lesson: false, lessonN: 9}];
  lessonsTime: Array<any> = [];
  settings = {
    primaryColor: '#233151',
    accentColor: '#90A711',
    text1: '#FFFFFF',
    text2: '#FFFFFF',
    bg1: '#233151',
    bg2: '#233151',
    LT:	true,
    timetableDuration:	1,
    bellDuration:	40,
    SlideDuration:	10
  };
  school = {
    name:	'',
    logo:	'',
    ip:	'',
    restart: false,
    showTimetable:	true,
    timetableRepeat:	1000,
    bellDuration:	60000,
    slideDuration:	12,
    color1:	'yellow',
    color2:	'red',
    turnOnTime:	'07:30:00',
    turnOffTime:	'08:00:00'
  };
  minimize = {
    sH: 0,
    sM: 0,
    eH: 23,
    eM: 59,
    status: false,
    turnOn: () => {
        if (this.router.url !== '/saver') {
          this.minimize.status = true;
          this.router.navigateByUrl('/saver', { skipLocationChange: true });
        }
      },
      turnOff: () => {
        if (this.router.url === '/saver') {
          this.minimize.status = false;
          this.router.navigateByUrl('/main', { skipLocationChange: true });
        }
    }
  };
  private interval: any;

  constructor(private http: HttpClient, private router: Router) {
    this.interval = setInterval(() => this.getSettings(), 150000);
  }


  lookFor(key: string) {
    if (key === 'nokey') {
      this.status = 'Failed';
      return;
    }
    this.key = key;
    this.getSettings(true);
  }

  getSettings(first?: boolean): void {
    this.http.get('/api/screen/' + this.key).subscribe( (success: any) => {
      if (first) {
        this.status = 'Ok';
      }
      if (success.settings) {
        this.settings = success.settings;
        const root = document.documentElement;
        root.style.setProperty('--s1', this.settings.primaryColor);
        root.style.setProperty('--s2', this.settings.accentColor);
        root.style.setProperty('--text1', this.settings.text1);
        root.style.setProperty('--bg1', this.settings.bg1);
        root.style.setProperty('--text2', this.settings.text2);
        root.style.setProperty('--bg2', this.settings.bg2);
      }
      if (success.school) {
        this.school = success.school;
        this.minimize.sM = parseInt(this.school.turnOnTime.split(':')[1], 10);
        this.minimize.sH = parseInt(this.school.turnOnTime.split(':')[0], 10);
        this.minimize.eH = parseInt(this.school.turnOffTime.split(':')[0], 10);
        this.minimize.eM = parseInt(this.school.turnOffTime.split(':')[1], 10);
        this.lessonsTime = success.times;
        if (this.school.restart) {
          window.location.reload();
        }
      }
    }, error => {
      if (first) {
        this.status = 'Failed';
      }
      this.lessonsTime = [];
    });
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

}



// root.addEventListener("mousemove", e => {
// });


