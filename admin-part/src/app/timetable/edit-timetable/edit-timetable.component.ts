import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SelectDisciplineComponent } from '../select-discipline/select-discipline.component';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { Discipline } from 'src/app/disciplines.service';

interface Row {
  edit?: boolean;
  busy?: boolean;
  disciplineId: number;
  room: string;
  teacher: string;
  name: string;
  lessons: any;
}

@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.scss']
})
export class EditTimetableComponent implements OnInit {
  day: number;
  semester: number;
  days: Array<string> = ['pirmadienis', 'antradienis', 'trečiadienis', 'ketvirtadienis', 'penktadienis'];
  filteredOptions: string[] = [];
  rows: Array<Row> = [];
  classes: Array<string> = [];
  newRow: Row = {
    edit: false,
    lessons: {},
    disciplineId: 0,
    room: '',
    name: '',
    teacher: ''
  } as Row;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router,
              public loginService: LoginService,
              private snackBar: SnackbarService,
              private http: HttpClient) {
    this.day = parseInt(this.route.snapshot.paramMap.get('day'), 10);
    this.semester = parseInt(this.route.snapshot.paramMap.get('semester'), 10);

    if (!this.day || !this.semester || this.semester < 0 || this.semester > 2 || this.day < 0 || this.day > 5) {
      this.router.navigate(['/404']);
    }
    this.http.get('/api/timetables/' + this.semester + '/' + this.day).subscribe((res: any) => {
      // console.log(res);
      this.rows = res.rows;
      this.filteredOptions = res.classes;
      this.classes = res.classes;
    }, error => {
      this.snackBar.show('Nepavyko gauti duomenų. ' + error.error);
      // Kritinė klaida
    });
  }

  ngOnInit() {
  }

  private filter(value: string) {
    this.filteredOptions = this.classes.filter(option => option.toLowerCase().includes(value.toLowerCase()));
  }
  private all() {
    this.filteredOptions = this.classes;
  }
  private addToClasses(value: string) {
    if (!value || value === '') {
      return;
    }
    if (this.classes.findIndex(x => x === value) === -1) {
      this.classes.push(value);
    }
  }
  edit(index): void {
    this.rows[index].edit = true;
  }

  save(index?: number): void {
    if (index != null) {
      // Updating
      this.rows[index].edit = false;
      this.rows[index].busy = true;
      this.http.put('/api/timetables/' + this.rows[index].disciplineId, {
        row: this.rows[index],
        weekDay: this.day,
        semester: this.semester
      }).subscribe((success: { message: string }) => {
        this.snackBar.show(success.message, 'success');
        this.rows[index].busy = false;
        for (const key in this.rows[index].lessons) {
          if (this.rows[index].lessons.hasOwnProperty(key)) {
            this.addToClasses(this.rows[index].lessons[key]);
          }
        }
      }, error => {
        this.snackBar.show(error.error, 'error');
      });
    } else {
      // new
      this.http.post('/api/timetables/', {
        row: this.newRow,
        weekDay: this.day,
        semester: this.semester
      }).subscribe((success: { message: string }) => {
        this.snackBar.show(success.message, 'success');
        this.newRow.edit = false;
        this.rows.push(this.newRow);
        for (const key in this.newRow.lessons) {
          if (this.newRow.lessons.hasOwnProperty(key)) {
            this.addToClasses(this.newRow.lessons[key]);
          }
        }
        this.newRow = {
          edit: false,
          lessons: {},
          disciplineId: 0,
          room: '',
          name: '',
          teacher: ''
        } as Row;
      }, error => {
        this.snackBar.show(error.error, 'error');
      });
    }
  }

  delete(index): void {
    this.rows[index].busy = true;
    this.http.delete('/api/timetables/' + this.semester + '/' + this.day +
    '/' + this.rows[index].disciplineId).subscribe((success: { message: string }) => {
      this.snackBar.show(success.message, 'success');
      this.rows.splice(index, 1);
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
    /// -
  }

  openDisciplineSelectDialog(index?: number): void {
    const dialogRef = this.dialog.open(SelectDisciplineComponent, {
      disableClose: true,
      data: {
        id: (index) ? this.rows[index].disciplineId : this.newRow.disciplineId
      }
    });
    dialogRef.afterClosed().subscribe((selected: Discipline) => {
      if (!selected) {
        this.snackBar.show('Dialogas uždarytas! Nebuvo atlikta pasirinkimo!', 'warning');
        return;
      }
      if (!index) {
        this.newRow.disciplineId = selected.id;
        this.newRow.name = selected.name;
        this.newRow.room = selected.room;
        this.newRow.teacher = selected.teacher;

      } else {
        this.rows[index].disciplineId = selected.id;
        this.rows[index].name = selected.name;
        this.rows[index].room = selected.room;
        this.rows[index].teacher = selected.teacher;
      }
    });
  }
}
