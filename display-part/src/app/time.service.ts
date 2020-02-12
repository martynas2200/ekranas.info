import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  // Temporary
  // private months = ['Sausio ', 'Vasario ', 'Kovo ', 'Balandžio ',
  //                 'Gegužės ', 'Birželio ', 'Liepos ', 'Rūgpjūčio ',
  //                 'Rugsėjo ', 'Spalio ', 'Lapkričio ', 'Gruodžio '];
  public weekDays: Array<string> = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis',
                                    'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'];
  public color = 'white';
  public left = 0;
  public leftMinutes = '';
  public leftPercentages = 30;
  public lesson = -1;
  public break = false;
  public bell = false;
  public nextLesson = new Date();
  public lessonStarted = new Date();
  public reset = new Date();
  public now = new Date();

  constructor(public data: DataService, public settings: SettingsService) {
    setInterval(() => {
      this.update();
    }, 1000);
  }
  public checkPrefix = (i: number) => {
    return (i < 10) ? '0' + i : i;
  }
  get = (a: string) => {
    switch (a) {
      case 'h':
        return this.checkPrefix(this.now.getHours());
        break;
      case 'm':
        return this.checkPrefix(this.now.getMinutes());
        break;
      case 's':
        return this.checkPrefix(this.now.getSeconds());
        break;
      default:
        return '';
        break;
    }
  }
  public compareTime(start, now, end) {
    return ((start <= now && now < end) ? true : false);
  }

  remainingPercentages() {
    this.leftPercentages = (this.now.getTime() - this.lessonStarted.getTime()) /
    (this.nextLesson.getTime() - this.lessonStarted.getTime()) * 100;
  }

  remainingTime(now, end) {
    const difference = end - now;
    this.left = Math.floor(difference / 1000 / 60);
    this.color = (this.left < 10) ? 'hsl(' + (this.left * 6) + ', 100%, 50%)' : 'white';
    if (this.left >= 11 && this.left <= 19) {
      this.leftMinutes = 'minučių';
    } else if (this.left === 1 || this.left % 10 === 1) {
      this.leftMinutes = 'minutė';
    } else if (this.left % 10 === 0) {
      this.leftMinutes = 'minučių';
    } else {
      this.leftMinutes = 'minutės';
    }
  }
  update(): void {
    this.now = new Date();
    this.remainingPercentages();
    const today = new Date();
    const y = today.getFullYear();
    const month = today.getMonth();
    const d = today.getDate();
    const n = today.getDay();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    let noLesson = true;
    // if (
    if (n !== 0 && n !== 6 &&
      this.compareTime(new Date(y, month, d, this.settings.minimize.sH, this.settings.minimize.sM),
      new Date(y, month, d, h, m),
      new Date(y, month, d, this.settings.minimize.eH, this.settings.minimize.eM))) {
      this.settings.minimize.turnOff();
    } else {
      this.settings.minimize.turnOn();
    }

    // if (true) {
    if (n !== 0 && n !== 6) {
      if (this.settings.lessonsTime.length !== 0 && this.nextLesson <= this.now) {
        console.log('Starting to look up for lesson');
        for (let i = 0; i < this.settings.lessonsTime.length - 1; i++) {
          if (this.compareTime(
            new Date(y, month, d, this.settings.lessonsTime[i].h, this.settings.lessonsTime[i].m),
            new Date(y, month, d, h, m),
            new Date(y, month, d, this.settings.lessonsTime[i + 1].h, this.settings.lessonsTime[i + 1].m)
          )) {
            this.lessonStarted = new Date(y, month, d, this.settings.lessonsTime[i].h, this.settings.lessonsTime[i].m, 0);
            this.nextLesson = new Date(y, month, d, this.settings.lessonsTime[i + 1].h, this.settings.lessonsTime[i + 1].m, 0);
            console.log(this.nextLesson.toString());
            this.lesson = this.settings.lessonsTime[i].lessonN;
            this.break = !this.settings.lessonsTime[i].lesson;
            console.log('Founded!');
            // setTimeout(() => this.timetable.update(), 500);
            this.bell = true;
            setTimeout(() => this.bell = false, this.settings.settings.bellDuration * 1000);
            noLesson = false;
            this.remainingTime(new Date(y, month, d, h, m), this.nextLesson);
            break;
          }
        }
        if (noLesson) {
          this.lesson = -1;
          // setTimeout(() => this.timetable.update(), 500);
          this.nextLesson  = new Date(y, month, d, h, m + 15);
          // this.nextLesson.setDate(this.nextLesson.getDate() + 1);
        }
      } // End of check for next lesson
      if (s === 0) {
        this.remainingTime(new Date(y, month, d, h, m), this.nextLesson);
      }
    } // end of week day check
    if (this.reset < this.now) {
      // Reset things
      this.data.lessons = [];
      this.data.notificationSubject.next([]);
      this.data.getTimetable();
      this.reset = new Date(y, month, d, 0, 1);
      this.reset.setDate(this.reset.getDate() + 1);
    } // End of reset
  } // End of update
}


//   today = new Date();
//   active = true;
//   y = this.today.getFullYear();
//   month = this.today.getMonth();
//   d = this.today.getDate();
//   n = this.today.getDay();
//   h = this.today.getHours();
//   m = this.today.getMinutes();
//   s = this.today.getSeconds();

//   if (this.n != 0 && this.n != 6 && this.compare_time(new Date(this.y, this.month, this.d, this.minimize.sH,
// this.minimize.sM), new Date(this.y, this.month, this.d, this.h, this.m), new Date(this.y, this.month, this.d,
// this.minimize.eH, this.minimize.eM))) {
//     this.active = true;
//     // minimize.turnOff();
//   } else {
//     this.active = false;
//     // minimize.turnOn();
//   }


