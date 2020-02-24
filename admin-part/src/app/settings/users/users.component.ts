import { Component, OnInit } from '@angular/core';
import { EditUserComponent } from '../dialogs/edit-user/edit-user.component';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
import { MatDialog } from '@angular/material/dialog';
  // const MONTH_NAMES_EN = [
  //   'January', 'February', 'March', 'April', 'May', 'June',
  //   'July', 'August', 'September', 'October', 'November', 'December'
  // ];
  const MONTH_NAMES_LT = [
    'Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio',
    'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'
  ];
interface User {
  email: string;
  id: number;
  name: string;
  role: number;
  username: string;
  lastLogin: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private snackBar: SnackbarService,
              private loginService: LoginService) {
    this.http.get('/api/users').subscribe((success: any) => {
      if (success.users) { this.users = success.users; }
    }, error => {
      this.snackBar.show('Nepavyko gauti vartotojų duomenų ', 'error');
    });
  }

  users: Array<User> = [];

  delete(index): void {
    if (!confirm('Ar tikrai norite ištrinti šį vartotoją? \n\ Vartotojui, bus pranešta el. paštu, jog jo paskyra jau nebegalioja!')) {
      return;
    }
    this.http.delete('/api/users/' + this.users[index].id ).subscribe(() => {
      this.snackBar.show('Vartotojas sėkmingai ištrintas', 'success');
      this.users.splice(index, 1);
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }

  add(): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { edit: false }
    });
    dialogRef.afterClosed().subscribe( (result: any) => {
      if (result.user) {
        this.users.push(result.user);
      }
    });
  }
  edit(index: number): void {
    this.dialog.open(EditUserComponent, {
      data: { edit: true, user: this.users[index] }
    });
  }



  ngOnInit() {

  }
  returnUserIndexById(id: number) {
    return this.users.findIndex(x => x.id === id);
  }
  
  public getFormattedDate(date, prefomattedDate = '', hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES_LT[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
  
    if (minutes < 10) minutes = "0" + minutes;
    if (prefomattedDate) {
      // Yesterday / Today at 10:20
      // return `${ prefomattedDate } at ${ hours }:${ minutes }`;
      return `${ prefomattedDate } ${ hours }:${ minutes }`;
    }
  
    if (hideYear) {
      // 10. January at 10:20
      // return `${ day }. ${ month } at ${ hours }:${ minutes }`;
      return `${ month } ${ day } ${ hours }:${ minutes }`;
    }
  
    // 10. January 2017. at 10:20
    // return `${ day }. ${ month } ${ year }. at ${ hours }:${ minutes }`;
    return `${ year } ${ month } ${ day } d. ${ hours }:${ minutes }`;
  }
  
  public timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }
  
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000;
    const today = new Date();
    const yesterday = new Date(today.getTime() - DAY_IN_MS);
    const seconds = Math.round((today.getTime() - date.getTime()) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();
  
  
    if (seconds < 30) {
      return 'dabar';
      // return 'now';
    } else if (seconds < 60) {
      return `prieš ${ seconds } sekundes`;
      // return `${ seconds } seconds ago`;
    } else if (seconds < 90) {
      return 'prieš';
      // return 'about a minute ago';
    } else if (minutes < 60) {
      return `prieš ${ minutes } minutes`;
      // return `${ minutes } minutes ago`;
    } else if (isToday) {
      return this.getFormattedDate(date, 'Šiandien');
      // return this.getFormattedDate(date, 'Today'); // Today at 10:20
    } else if (isYesterday) {
      return this.getFormattedDate(date, 'Vakar');
      // return this.getFormattedDate(date, 'Yesterday'); // Yesterday at 10:20
    } else if (isThisYear) {
      return this.getFormattedDate(date, '', true); // 10. January at 10:20
    }
  
    return this.getFormattedDate(date); // 10. January 2017. at 10:20
  }
  getRoleName(role) {
    switch (role) {
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
