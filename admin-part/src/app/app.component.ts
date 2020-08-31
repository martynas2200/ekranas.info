import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { RouterOutlet, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { routeY } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeY
  ]
})
export class AppComponent implements OnInit {
    constructor(
      public loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(filter((route) => route.outlet === 'primary'))
      .pipe(mergeMap((route) => route.data))
    .subscribe((event) => this.titleService.setTitle((event['title'] ? event['title'] + ' | ' : '') + 'Informacinis ekranas'));
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData ;
    // && outlet.activatedRouteData['animation'];
  }
}
