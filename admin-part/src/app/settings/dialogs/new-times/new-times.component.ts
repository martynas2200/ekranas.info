import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/login.service';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
@Component({
  selector: 'app-new-times',
  templateUrl: './new-times.component.html',
  styleUrls: ['./new-times.component.scss']
})
export class NewTimesComponent implements OnInit {
  math = Math;
  new: any[] = [];
  input = false;
  busy = false;
  current = 0;
  startTime: string;
  endTime: string;
  name = '';

  constructor(public dialogRef: MatDialogRef<NewTimesComponent>,
              @Inject(MAT_DIALOG_DATA) public config: any,
              private loginService: LoginService,
              private http: HttpClient,
              private snackBar: SnackbarService) {}
  ngOnInit() {
  }

  addLesson() {
    if (!this.input) {
      this.current++;
      this.input = true;
    } else {
      if (!this.startTime || !this.endTime) {
        console.log(this.startTime);
        this.snackBar.show('Nenurodyti ar neužpildyti ' + this.current + ' pamokos pradžios ir pabaigos laikai!', 'error');
        return false;
      }
      if (!this.compare(this.startTime, this.endTime)) {
        return false;
      } else {
        this.new.push({
          h: parseInt(this.startTime.split(':')[0], 10),
          m: parseInt(this.startTime.split(':')[1], 10),
          lesson: true,
          lessonN: this.current
        });
        this.new.push({
          h: parseInt(this.endTime.split(':')[0], 10),
          m: parseInt(this.endTime.split(':')[1], 10),
          lesson: false,
          lessonN: (this.current + 1)
        });
        this.input = false;
      }
      }
    }

    timeToMili(c) {
      return (parseInt(c.split(':')[0], 10) * 60) + parseInt(c.split(':')[1], 10);
    }

    compare(a, b) {
      if (this.timeToMili(a) < this.timeToMili(b)) {
        return true;
      } else if (this.timeToMili(a) === this.timeToMili(b)) {
        this.snackBar.show(this.current + ' Pamokos pradžios laikas negali būti lygus pabaigos laikui!', 'error');
        return false;
      } else {
        this.snackBar.show(this.current + ' Pamokos pradžios laikas negali būti didesnis už pabaigos laiką!', 'error');
        return false;
      }
    }
    save() {
      if (this.input) {
        this.snackBar.show('Išsaugoti nepavyko, kadangi yra neužpildytų laukelių! Užpildę, paspauskite patvirtinti!', 'info');
        return false;
      } else if (!this.name) {
        this.snackBar.show('Prieš išsaugojimą įveskite antraštę pamokų laikui', 'info');
      } else {
        this.busy = true;
        this.http.post('/api/settings/times', {
          name: this.name,
          times: this.new
        }).subscribe((success: any) => {
          this.snackBar.show(success.message, 'success');
          this.dialogRef.close(success.time);
        }, error => {
          this.snackBar.show(error.error, 'error');
          this.busy = false;
          console.log(error);
        });
      } // input check
    } // save

    wrap(num: number) {
      if (num === 0) {
        return '00';
      } else if  (num  < 10) {
        return (' ' + num);
        // return ('&nbsp;' + num);
      } else {
        return num;
      }
    }
  }

