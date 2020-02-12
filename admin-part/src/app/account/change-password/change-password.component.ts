import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  busy = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<ChangePasswordComponent>,
              private http: HttpClient,
              private snackBar: SnackbarService) {}

  submit(form: NgForm) {
    if (form.invalid) { return ; }
    this.busy = true;
    this.http.post<any>('/api/auth/change/password', form.value).subscribe( success => {
      this.snackBar.show(success.message, 'success');
      this.dialogRef.close();
    }, error => {
      this.snackBar.show('Klaida! ' + error.error, 'error');
      this.busy = false;
    });
  }
}
