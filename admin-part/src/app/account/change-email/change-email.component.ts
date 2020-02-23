import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.scss']
})
export class ChangeEmailComponent {
  email = '';
  password = '';
  busy = false;

  constructor(@Inject(MAT_DIALOG_DATA) public config: { email: string},
              private dialogRef: MatDialogRef<ChangeEmailComponent>,
              private http: HttpClient,
              private snackBar: SnackbarService,
              private logginService: LoginService) {}

  submit(form: NgForm) {
    if (form.invalid) return ;
    this.busy = true;
    this.http.post<any>('/api/auth/change/email', form.value).subscribe( success => {
      this.logginService.user.email = this.email;
      this.snackBar.show(success.message, 'success');
      this.dialogRef.close();
    }, error => {
      this.snackBar.show('Klaida! ' + error.error, 'error');
      this.busy = false;
    });
  }

}
