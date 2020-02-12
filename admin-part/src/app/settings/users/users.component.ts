import { Component, OnInit } from '@angular/core';
import { EditUserComponent } from '../dialogs/edit-user/edit-user.component';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
import { MatDialog } from '@angular/material/dialog';
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
  // timeAgo(date: Date) {
  //   const diff = new Date((new Date().getTime()) - date.getTime());
  //   if (diff.geMonth > 0) {
  //     return diff.m + '&nbsp;'.linksniai(diff.m, 'mėnesį', 'mėnesius', 'mėnesių');
  //   }
  //   else if (diff.d > 0) {
  //     return diff.d + '&nbsp;'.linksniai(diff.d, 'dieną', 'dienas', 'dienų');
  //   }
  //   else if (diff.h > 0) {
  //     return diff.h + '&nbsp;'.linksniai(diff.h, 'valandą', 'valandas', 'valandų');
  //   }
  //   else if (diff.i > 0) {
  //     return diff.i + '&nbsp;'.linksniai(diff.i, 'minutę', 'minutes', 'minučių');
  //   }
  //   else if (diff.s > 0) {
  //     return diff.s + '&nbsp;'.linksniai(diff.s, 'sekundę', 'sekundes', 'sekundžių');
  //   }

  // }
  // linksniai(sk, aa, bb, cc) {
  //   // aa minutė
  //   // bb minutės
  //   // cc minučių
  //   // tslint:disable-next-line: triple-equals
  //   if (sk >= 11 && sk <= 19) {
  //     return cc;
  //   } else if (sk === 1 || sk % 10 === 1) {
  //     return aa;
  //   } else if (sk % 10 === 0) {
  //     return cc;
  //   } else {
  //     return bb;
  //   }
  // }
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
