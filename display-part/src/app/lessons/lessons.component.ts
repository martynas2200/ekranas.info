import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, Lesson } from '../data.service';
import { SettingsService } from '../settings.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit, OnDestroy {
  currentindex = 0;
  private timeoutRef: any;
  constructor(public data: DataService, public time: TimeService, public settings: SettingsService) {

  }

  ngOnInit() {
    this.changeCard();
  }

  filterLessons(lesson: number) {
    return this.data.lessons.filter(x => x.lessonNr === lesson);
  }

  parse(a: string) {
    return parseInt(a, 10);
  }

  changeCard(): void {
    if (this.currentindex >= this.filterLessons(this.time.lesson).length - 1) {
      this.currentindex = 0;
    } else {
      this.currentindex++;
    }
    this.timeoutRef = setTimeout(() => this.changeCard(), this.settings.settings.timetableDuration * 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutRef);
  }

}
