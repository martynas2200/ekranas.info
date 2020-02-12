import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.scss']
})
export class ChangeUsernameComponent {
  OldUsername: string;
  NewUsername = '';
  password = '';
  busy = false;

  constructor(@Inject(MAT_DIALOG_DATA) public config: { username: string },
              private dialogRef: MatDialogRef<ChangeUsernameComponent>,
              private http: HttpClient,
              private snackBar: SnackbarService,
              private logginService: LoginService) {
    this.OldUsername = this.config.username;
  }

  submit(form: NgForm) {
    if (form.invalid) { return ; }
    this.busy = true;
    this.http.post<any>('/api/auth/change/username', form.value).subscribe( success => {
      this.logginService.user.username = this.NewUsername;
      this.snackBar.show(success.message, 'success');
      this.dialogRef.close();
    }, error => {
      this.snackBar.show('Klaida! ' + error.error, 'error');
      this.busy = false;
    });
  }

}
