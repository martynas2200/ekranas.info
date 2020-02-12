import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { SettingsService } from '../settings.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  currentData: any;
  subscription: Subscription;
  notificationBoxes: Array<any> = [];

  constructor(public data: DataService, public settings: SettingsService) {
  }
  ngOnInit() {
    this.subscription = this.data.notificationSubject.subscribe(x => {
      // Clean carousel
      this.slickModal.unslick();
      this.notificationBoxes = x;
    });
    // this.data.onNewMessage().subscribe(msg => {
    //   console.log('got a msg: ' + msg);
    // });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
