import { Component, OnInit, Inject } from '@angular/core';
import { SelectDisciplineComponent } from '../select-discipline/select-discipline.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';

@Component({
  selector: 'app-dialog-change-settings',
  templateUrl: './dialog-change-settings.component.html',
  styleUrls: ['./dialog-change-settings.component.scss']
})
export class DialogChangeSettingsComponent implements OnInit {
  busy = false;

  constructor (@Inject(MAT_DIALOG_DATA) public dialogData: { settings: any }, 
              private dialogRef: MatDialogRef<SelectDisciplineComponent>, 
              private loginService: LoginService,
              private http: HttpClient,
              private snackBar: SnackbarService,){
    
  }

  sendSettings(form: NgForm){
    if (form.invalid) return ;
    this.busy = true;
    this.http.put('/api/settings/timetable', {
      settings: this.dialogData.settings
    }).subscribe((data: any) => {
      this.snackBar.show(data.message, 'success');
      this.dialogRef.close({
        status: true,
        settings: this.dialogData.settings
      });
    }, error => {
      this.busy = false;
      this.dialogRef.close();
      this.snackBar.show('Klaida! ' + error.error, 'error');
    });
  }

  ngOnInit() {
  }

}
