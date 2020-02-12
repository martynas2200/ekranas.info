import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private settings: SettingsService) {
    if (this.settings.status !== 'Ok') {
      this.router.navigateByUrl('/nokey', { skipLocationChange: true});
    }
    // console.log('Main is ready!');
  }

  ngOnInit() {
  }

}
