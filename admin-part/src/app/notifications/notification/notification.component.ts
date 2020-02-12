import { Component, OnInit, Input } from '@angular/core';
import { NotificationsComponent } from '../notifications.component';

const IsDateInRange = (start: string, end: string, repeat: boolean = false, tomorrow: boolean = false) => {
  const startDate = new Date(start);
  let date = new Date();
  if (tomorrow) {
    date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  }
  let endDate = new Date(end);
  startDate.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  endDate.setHours(0, 0, 0, 0);
  if (startDate.getTime() === date.getTime()) {
    return true;
  }
  // If end date is invalid
  if (end === null || end === '0000-00-00') {
    endDate = startDate;
  }

  if (repeat)  {
      return (startDate.getTime() <= date.getTime() && date.getTime() <= endDate.getTime());
  } else {
      return false;
  }
};

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() data: any;
  @Input() index: number;

  constructor(private list: NotificationsComponent) { }

  ngOnInit() {
  }


  remove() {
    this.list.remove(this.index);
  }

  edit() {
    this.list.edit(this.index);
  }
  isRelevant(): boolean {
    if (this.data.showBefore) {
      return IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes) ||
      IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes, true);
    } else {
      return IsDateInRange(this.data.date1, this.data.date2, this.data.repeatTimes);
    }
  }
  toggleVisibility() {
    this.list.toggleVisibility(this.index);
  }

}
