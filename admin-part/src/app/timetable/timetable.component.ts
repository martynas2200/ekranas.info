import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeSettingsComponent } from './dialog-change-settings/dialog-change-settings.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
  animations: [
    trigger('EnterLeaveY', [
      transition(':enter', [
        style({ transform: 'translateY(200%)'}),
        animate('0.5s 300ms ease-in', style({ transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.3s ease-out', style({ transform: 'translateY(200%)' }))
      ])
    ]),
    trigger('scale', [
      transition(':enter', [
        style({ transform: 'scale(0)', height: '0px', margin: '0px'  }),
        animate('0.5s 300ms ease-in', style({ transform: 'scale(1)', height: '*' }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', height: '*'  }),
        animate('0.3s ease-out', style({ transform: 'scale(0)', height: '0px', margin: '0px'  }))
      ])
    ])
  ]
})
export class TimetableComponent implements OnInit {
  selected: number = 1;
  data = {
    currentSemester: 0,
    numberOfSavedRows: 0,
    settings: {
      showTimetable: false,
      firstSemester: '',
      secondSemester:  '',
      endSemesters: ''
    }
  };
  constructor(public loginService: LoginService, private http: HttpClient, private snackBar: SnackbarService, private dialog: MatDialog) {
    this.http.get('/api/settings/timetable').subscribe((data: any) => {
      if (data.settings) {
        this.data = data;
        this.selected = (data.currentSemester == 2 ? 2 : 1);
      }
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }
  ngOnInit() {
  }

  openSettings(){
    const dialogRef = this.dialog.open(DialogChangeSettingsComponent, {
      data: { settings: { ...this.data.settings} }
    });
    dialogRef.afterClosed().subscribe(callback => {
      if (callback && callback.status) {
        this.data.settings = callback.settings;
      }
    });
  }
}
