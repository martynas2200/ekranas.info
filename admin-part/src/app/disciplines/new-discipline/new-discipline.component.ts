import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { Discipline } from 'src/app/disciplines.service';
@Component({
  selector: 'app-new-discipline',
  templateUrl: './new-discipline.component.html',
  styleUrls: ['./new-discipline.component.scss']
})
export class NewDisciplineComponent implements OnInit {
  busy = false;

  constructor(public dialogRef: MatDialogRef<NewDisciplineComponent>,
              @Inject(MAT_DIALOG_DATA) public config: { edit: boolean, data: Discipline},
              private http: HttpClient,
              private snackBar: SnackbarService) {
    if (!this.config.edit) {
      this.config.data = {} as Discipline;
    }
  }

  submit(form: NgForm) {
    if (form.invalid) {
      return ;
    }
    this.busy = true;
    if (!this.config.edit) {
      this.http.post<any>('/api/disciplines', {
        name: this.config.data.name,
        room: this.config.data.room,
        teacher: this.config.data.teacher
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.discipline);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
      });
    } else {
      this.http.put<any>('/api/disciplines/' + this.config.data.id, {
        discipline: this.config.data
      }).subscribe(success => {
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.discipline);
      }, error => {
        this.snackBar.show(error.error, 'error');
        this.busy = false;
      });
    }

  }

  ngOnInit() {
  }

}
