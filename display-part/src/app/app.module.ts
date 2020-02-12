import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { MainComponent } from './main/main.component';
import { StartupComponent } from './startup/startup.component';
import { WeatherComponent } from './weather/weather.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MusicRingComponent } from './music-ring/music-ring.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    LessonsComponent,
    NotificationsComponent,
    ScreensaverComponent,
    DayInfoComponent,
    MainComponent,
    StartupComponent,
    MusicRingComponent,
    WeatherComponent,
    ThemesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
