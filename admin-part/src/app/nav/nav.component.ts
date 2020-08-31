import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { slide } from '../animations';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [slide]
})
export class NavComponent implements OnInit {
  darkMode = false;
  hidden = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 960px)')
  .pipe(
    map(result => result.matches),
    shareReplay()
    );
    
  constructor(private breakpointObserver: BreakpointObserver, public loginService: LoginService) {}

    ngOnInit() {}

  hide() {
    this.hidden = true;
  }

  toggleMenu() {
    this.hidden = !this.hidden;
  }
  toggleDarkMode() {
    const root = document.documentElement.style;
    this.darkMode = !this.darkMode;
    //Use css for properties
    if (this.darkMode) {
      root.setProperty('--bg', '#233151');
      root.setProperty('--text', '#FFF');
      root.setProperty('--component-bg', '#0003');
      root.setProperty('--component-text', '#FFF');
    }
    else {
      root.setProperty('--bg', '#eeeeee');
      root.setProperty('--text', '#233151');
      root.setProperty('--component-bg', '#FFF');
      root.setProperty('--component-text', '#000');
    }
  }

  loggout() {
    this.hide();
    this.loginService.loggout();
  }
}
