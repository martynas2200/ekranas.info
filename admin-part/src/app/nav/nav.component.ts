import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hidden = true;

  constructor(public loginService: LoginService, public router: Router) {
    // setInterval(()=> {
    //   console.log(this.router.url);
    // }, 2000);
  }

  ngOnInit() {

  }

  hide() {
    this.hidden = true;
  }

  toggleMenu() {
    this.hidden = !this.hidden;
  }

  loggout() {
    this.hide();
    this.loginService.loggout();
  }
}
