import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-day-info',
  templateUrl: './day-info.component.html',
  styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnInit, OnDestroy {
  nameDays: Array<string> = [];
  celebrations: Array<string> = [];
  horoscopes: Array<{ title: string, description: string }> = [];
  private interval: any;
  private timeout: any;

  constructor(private http: HttpClient, public settings: SettingsService) {
  }

  ngOnInit() {
    this.update();
    this.interval = setInterval(() => this.update(), 3600000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  update() {
    this.http.get('/api/screen/day').subscribe(
      (success: {   nameDays: Array<string>;  celebrations: Array<string>;
        horoscopes: Array<{ title: string, description: string }>; }) => {
        if (success.nameDays) {
          this.nameDays = success.nameDays;
        }
        if (success.celebrations) {
          this.celebrations = success.celebrations;
        }
        if (success.horoscopes) {
          this.horoscopes = success.horoscopes;
        }
      },
      error => {
        this.timeout = setTimeout(() => this.update(), 60000);
        // message("Nepavyko gauti horoskopų!");
      }
    );
  }

}
