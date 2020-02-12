import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {
  math = Math;
  settings: {
    ip: string;
    turnOnTime: string;
    turnOffTime: string;
  } = {
    ip: '',
    turnOnTime: '',
    turnOffTime: ''
  };

  constructor(private dialog: MatDialog, private http: HttpClient, private snackBar: SnackbarService, public loginService: LoginService) {
    this.http.get('/api/settings').subscribe((res: any) => {
      this.settings = res.settings;
    }, (errorr: any) => {
      this.snackBar.show(errorr.error);
    });
  }

  ngOnInit() {
  }

  update() {
    if (this.loginService.user.role < 1) {
      return;
    }
    this.http.put('/api/settings', this.settings).subscribe( (success: any) => {
      this.snackBar.show(success.message, 'success');
    }, error => {
      this.snackBar.show('Klaida! ' + error.error, 'error');
    });
  }
}
