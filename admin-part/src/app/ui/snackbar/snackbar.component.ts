import { Component, OnInit, OnDestroy } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Subscription } from 'rxjs';


import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
//     trigger('shakeit', [
//       state('shakestart', style({
//           transform: 'scale(1)',
//       })),
//       state('shakeend', style({
//           transform: 'scale(1)',
//       })),
//       transition('shakestart => shakeend', animate('1000ms ease-in',     keyframes([
//         style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
//         style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
//         style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
//         style({transform: 'translate3d(4px, 0, 0)', offset: 0.4}),
//         style({transform: 'translate3d(-4px, 0, 0)', offset: 0.5}),
//         style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
//         style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
//         style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
//         style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
//       ])))
// ]),
    trigger('state', [
      transition(':enter', [
        style({ bottom: '-100px', transform: 'translate(-50%, 0%) scale(0.3)' }),
        animate('150ms cubic-bezier(0, 0, 0.2, 1)', style({
          transform: 'translate(-50%, 0%) scale(1)',
          opacity: 1,
          bottom: '20px'
        })),
      ]),
      transition(':leave', [
        animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({
          transform: 'translate(-50%, 0%) scale(0.3)',
          opacity: 0,
          bottom: '-100px'
        }))
      ])
    ])
  ]
})




export class SnackbarComponent implements OnInit, OnDestroy {


  show = false;
  message = 'This is snackbar';
  type = 'success';
  private snackbarSubscription: Subscription;
  private timeOut: any;

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(
      (state) => {
        if (this.show) {
          this.show = false;
          clearTimeout(this.timeOut);
        }
        this.type = state.type;
        this.message = state.message;
        this.show = state.show;
        this.timeOut = setTimeout(() => {
          this.show = false;
        }, 5000);
      });
  }

  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }





}
