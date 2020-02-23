import { Component, OnInit, OnDestroy } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style } from '@angular/animations';
interface SnackBar {
  message: string;
  type: 'error'| 'success' | 'warning' | 'info';
};

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snackbar', [
      transition(':enter', [
        style({ transform: 'translateY(200%) scale(0.1)', height: '0px', margin: '0px'  }),
        animate('0.4s ease-in', style({
          transform: 'translateY(0%) scale(1)',
          opacity: 1,
          height: '*'
        })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('150ms cubic-bezier(0.4, 0.0, 1, 1)', style({
          transform: 'translateY(-100%) scale(0.1)',
          opacity: 0
        }))
      ])
    ])
  ]
})

export class SnackbarComponent implements OnInit, OnDestroy {
  public snackbars: Array<SnackBar> = [];
  private snackbarSubscription: Subscription;
  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(
      (state) => {
        this.snackbars.push({
          message: state.message,
          type: state.type
        });
        setTimeout(() => {
          this.snackbars.shift();
        }, 6000);
      });
  }

  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }

}
