import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { NumberFormatStyle } from '@angular/common';
import { Screen } from '../../screens/screens.component';


@Component({
  selector: 'app-new-screen',
  templateUrl: './new-screen.component.html',
  styleUrls: ['./new-screen.component.scss']
})
export class NewScreenComponent implements OnInit {
  screen: Screen = {} as Screen;
  busy = false;

  constructor(private dialogRef: MatDialogRef<NewScreenComponent>,
              private http: HttpClient,
              private snackBar: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public config: {edit: boolean, data: Screen} )  {
                if (!this.config.edit) {
                  this.screen.name = '';
                  this.screen.settings = {
                    primaryColor: '#233151',
                    accentColor: '#90A711',
                    text1: '#FFFFFF',
                    text2: '#FFFFFF',
                    bg1: '#233151',
                    bg2: '#233151',
                    LT: false,
                    timetableDuration: 1,
                    bellDuration: 40,
                    SlideDuration: 10
                  };
                } else {
                  this.screen = this.config.data;
                }
              }

  ngOnInit() {
  }
  submit(form: NgForm) {
    if (form.invalid) { return ; }
    this.busy = true;
    if (!this.config.edit) {
      delete this.screen.id;
      this.http.post<any>('/api/settings/screens', {
        screen: this.screen
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.screen);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
        console.log(error);
      });
    } else {
      this.http.put<any>('/api/settings/screens/' + this.screen.id, {
        screen: this.screen
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.screen);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
        console.log(error);
      });
    }

  }
}
