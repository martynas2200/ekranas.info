import { Component, OnInit } from '@angular/core';
import { slide } from 'src/app/animations';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [slide, trigger('realone', [
  transition('void => previous', [
    style({
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%'
    }),
    animate('0.5s', style({
      left: '0%',
    }))
  ]),
  transition('previous => void', [
    style({
      position: 'absolute',
      top: 0,
      left: '0%',
      width: '100%'
    }),
    animate('0.5s', style({
      left: '100%',
    }))
  ]),


  transition('void => next', [
    style({
      position: 'absolute',
      top: 0,
      left: '100%',
      width: '100%'
    }),
    animate('2s', style({
      left: '0%',
    }))
  ]),
  transition('next => void', [
    style({
      position: 'absolute',
      top: 0,
      left: '0%',
      width: '100%'
    }),
    animate('2s', style({
      left: '-100%',
    }))
  ])]),
  trigger('slideInOut', [
    transition(':enter', [
      style({transform: 'translateX(-700%)'}),
      animate('5s ease-in', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      animate('5s ease-in', style({transform: 'translateX(-700%)'}))
    ])
  ]), trigger('slidet', [
    transition(':enter', [
      style({
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%'
      }),
      animate('5s ease-in', style({left: '0%' }))
    ]),
    transition(':leave', [
      animate('5s ease-in', style({left: '-100%'}))
    ])
  ])]
})
export class CalendarComponent implements OnInit {
  LTU_months: Array<string> = ['Sausis ', 'Vasaris ', 'Kovas', 'Balandis ', 'Gegužė', 'Birželis', 'Liepa', 'Rūgpjūtis ', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'];
  days: Array<any> = [];
  next = true;
  date: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
    this.countDays();
  }

  nextMonth() {
    this.next = true;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1, 1);
    this.countDays();
  }
  
  previousMonth() {
    this.next = false;
    this.date = new Date(this.date.getFullYear(), this.date.getMonth() - 1, 1, 1);
    this.countDays();
  }

  countDays() {
    const firstDay = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
    const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
    let visibleStart = new Date(firstDay);
    let visibleEnd = new Date(lastDay);
    // getDay() Sunday is 0
    if (firstDay.getDay() == 0) visibleStart.setDate(firstDay.getDate() - 6);
    else visibleStart.setDate(firstDay.getDate() - (firstDay.getDay() - 1));

    if (lastDay.getDay() != 0) visibleEnd.setDate(lastDay.getDate() + (7 - lastDay.getDay()));
    
    const now = new Date();
    let iteration = new Date(visibleStart);
    this.days = [];
    let data = [];
    while (iteration.getTime() <= visibleEnd.getTime()) {
        data.push({ 
          // date: iteration.toLocaleString(), 
          number: iteration.getDate(),
          today: (now.getDate() == iteration.getDate() && now.getMonth() == iteration.getMonth() ),
          previous: iteration.getTime() < firstDay.getTime(),
          next: lastDay.getTime() < iteration.getTime()
        });
        iteration.setDate(iteration.getDate() + 1);
    }
    this.days = data;
  }

}
