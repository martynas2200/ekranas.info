import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login.service';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(public loginService: LoginService, private http: HttpClient, private snackBar: SnackbarService) {}

  ngOnInit() {

  }

  logoUpload(files: FileList): void {
    if (files.length <= 0) {
      return;
    }

    const uploadData = new FormData();
    uploadData.append('image', files[0]);

    this.http.post<any>('/api/uploads/logo', uploadData).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.loginService.user.school.logo = success.url;
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }

}
