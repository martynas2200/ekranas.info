import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  dates = {
    showTimetable: false,
    firstSemester: '',
    secondSemester:  '',
    endSemesters: '',
    currentSemester: 0,
    numberOfSavedRows: 0
  };
  constructor(public loginService: LoginService, private http: HttpClient, private snackBar: SnackbarService, private dialog: MatDialog) {
    this.http.get('/api/settings/timetable').subscribe((data: any) => {
      if (data.settings) {
        this.dates = data.settings;
      }
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }
  updateSettings() {
    this.http.put('/api/settings/timetable', {
      settings: this.dates
    }).subscribe((data: any) => {
      this.snackBar.show(data.message, 'success');
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }
  ngOnInit() {
  }

}
