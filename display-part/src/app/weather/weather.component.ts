import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnDestroy {
  math = Math;
  sunset = '';
  sunrise = '';
  data: any = {
    coord: {},
    weather: [],
    base:	'stations',
    main:	{},
    visibility:	0,
    wind:	{},
    clouds:	{},
    dt:	0,
    sys:	{},
    timezone:	0,
    id:	0,
    name:	'',
    cod:	0
  };
  private interval: any;
  private timeout: any;

  constructor(private http: HttpClient, private time: TimeService) {
    this.getInfo();
    this.interval = setInterval(() => this.getInfo(), 900000);
  }

  getInfo() {
    this.http.get('/api/screen/weather').subscribe((res: any) => {
      if (res.base === 'stations') {
        this.data = res;
        this.sunrise = new Date(res.sys.sunrise * 1000).getHours() + ':'
        + this.time.checkPrefix(new Date(res.sys.sunrise * 1000).getMinutes());
        this.sunset = new Date(res.sys.sunset * 1000).getHours() + ':'
        + this.time.checkPrefix(new Date(res.sys.sunset * 1000).getMinutes());
      }
    }, error => {
      this.timeout = setTimeout(() => this.getInfo(), 60000);
      this.data.main = {};
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

}
