import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { SnackbarService } from './ui/snackbar/snackbar.service';

export interface User {
  email: string;
  id: number;
  name: string;
  role: number;
  school: {
    id: number;
    logo: string;
    name: string;
  };
  username: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  hash?: string;
  user?: User;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  user: User = {} as User;
  busy = false;
  fail = false;

  constructor(private http: HttpClient, private router: Router, private snackBar: SnackbarService) {
    this.check();
    // this.currentLogo = this.cookieService.get('logo');
    // public cookieService: CookieService
    // setInterval(() => {
    //   // this.auth.refreshToken();
    //   // console.log(this.isLogged());
    //   this.http.post<LoginResponse>('api/auth/user', {}, {
    //     observe: 'response'
    //   }).subscribe(data => {
    //     if (!data.body.success) { this.loggout(false); }
    //   });
    // }, 10000);
    // this.http.post<LoginResponse>('api/auth/user', {}).subscribe(data => {
    //   console.log(data);
    //   if (data.user) {
    // this.user = data.user;
    // this.router.navigate(['/pranesimai']);
    //   }
    // },
    // error => {
    //   this.snackBar.show('Nepavyko gauti duomenų!', 'error');
    // });
  }
  check() {
    this.http.post<LoginResponse>('api/auth/user', {}).subscribe(data => {
      if (data.user) {
        this.user = data.user;
        this.setChatData(data);
      }
    }, () => { });
  }
  setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/;samesite=strict';
  }
  loggout() {
    this.http.get('api/auth/loggout').subscribe(() => {
      this.user = {} as User;
      this.router.navigate(['/']);
      this.snackBar.show('Sėkmingai atsijungėte', 'success');
    }, () => {
      this.snackBar.show('Atsiprašome, bet atsijungti nepavyko! Parašyk pagalbai žinutę.', 'error');
    });
  }
  async passwordReset(formData: any) {
    this.busy = true;
    return new Promise((resolve, reject) => {
      this.http.post<LoginResponse>('api/auth/forgot', formData).subscribe(data => {
        if (data.message) { this.snackBar.show(data.message, 'success'); }
        if (data.success) {
          resolve(true);
        }
        this.busy = false;
      },
      error => {
        this.busy = false;
        this.snackBar.show(error.error, 'error');
        reject();
        });
    });
  }

  loginAttempt(formData: any) {
    this.busy = true;
    this.http.post<LoginResponse>('api/auth/login', formData).subscribe(data => {
      if (data.message) { this.snackBar.show(data.message, 'success'); }
      if (data.success) {
        this.user = data.user;
        this.router.navigate(['/pranesimai']);
        this.setCookie('logo', this.user.school.logo, 30);
        this.setChatData(data);

      }
      this.busy = false;
    },
      error => {
        this.fail = true;
        this.busy = false;
        this.snackBar.show(error.error.message, 'error');
      });
  }
  isLogged() {
    return (this.user.name ? true : false);
  }

  setChatData(data: LoginResponse) {
    try {
      (window as any).Tawk_API.setAttributes({
        'name'  : data.user.name,
        'email' : data.user.email,
        'school': data.user.school.name,
        'hash'  : data.hash
    });
    } catch (error) {}
  }

  getRoleName() {
    switch (this.user.role) {
      case 0:
        return 'Mokytojas';
        break;
      case 1:
        return 'Redaktorius';
        break;
      case 2:
        return 'Administratorius';
        break;
      case 3:
        return 'Administratorius';
        break;
      default:
        return 'Vartotojas';
        break;
    }
  }
}
