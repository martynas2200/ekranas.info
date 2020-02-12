
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NeedAuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router, private httpClient: HttpClient) {
  }
  // state: RouterStateSnapshot
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {

    // const redirectUrl = route['routerState']['url'];

    if (this.loginService.isLogged()) {
      return of(true);
    }
    return this.httpClient.post('/api/auth/user', {}).pipe(
      map((res: any) => {
        if (res.success) {
          return true;
        } else {
          this.router.navigate(['/unauthorized'], { skipLocationChange: true });
          return false;
        }
      }),
      catchError((err) => {
        this.router.navigate(['/unauthorized'], { skipLocationChange: true });
        return of(false);
      })
    );

    // else {
    // }

  }

}
