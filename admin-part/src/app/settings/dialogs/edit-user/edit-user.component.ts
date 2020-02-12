import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User, LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: User;
  busy: boolean;
  constructor(private dialogRef: MatDialogRef<EditUserComponent>,
              private http: HttpClient,
              private snackBar: SnackbarService,
              private loginService: LoginService,
              @Inject(MAT_DIALOG_DATA) public config: { edit: boolean, user: User }, ) {
    if (!this.config.edit) {
      this.user = {} as User;
    } else {
      this.user = this.config.user;
    }
  }

  ngOnInit() {
  }
  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.busy = true;
    if (!this.config.edit) {
      // New user
      this.http.post<any>('/api/users', {
        name: this.user.name,
        email: this.user.email,
        role: this.user.role
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
      });
    } else {
      this.http.put<any>('/api/users/' + this.user.id, {
        user: this.user
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.discipline);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
      });
    }
  }
}
