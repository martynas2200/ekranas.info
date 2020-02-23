import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeUsernameComponent } from './change-username/change-username.component';
import { ShowRoleComponent } from './show-role/show-role.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  constructor(public loginService: LoginService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openRoleDialog(): void {
    this.dialog.open(ShowRoleComponent, {
      data: { role: this.loginService.user.role }
    });
  }

  openUsernameDialog(): void {
    this.dialog.open(ChangeUsernameComponent, {
      data: { username: this.loginService.user.username }
    });
  }

  openEmailDialog(): void {
    this.dialog.open(ChangeEmailComponent, {
      data: { email: this.loginService.user.email}
    });
  }

  openPasswordDialog(): void {
    this.dialog.open(ChangePasswordComponent, {
      data: { }
    });
  }
}
