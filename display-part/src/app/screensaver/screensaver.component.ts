import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.scss']
})
export class ScreensaverComponent implements OnInit {

  constructor(public time: TimeService, private router: Router, public settings: SettingsService) {
    // if (this.settings.status !== 'Ok') {
      // this.router.navigateByUrl('/', { skipLocationChange: true });
    // }
  }

  ngOnInit() {
  }

}
