import { Component } from '@angular/core';
import { LoginService } from './login.service';
import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], {optional: true}),
      // Animate the new page in
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], {optional: true})
    ]),
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {
  title = 'school-screen-admin-web';
  constructor(public loginService: LoginService) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData ;
    // && outlet.activatedRouteData['animation'];
  }
}
