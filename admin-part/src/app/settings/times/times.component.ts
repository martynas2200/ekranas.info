import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTimesComponent } from '../dialogs/new-times/new-times.component';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { LoginService } from 'src/app/login.service';
interface Time {
  id: number;
  name: string;
  active: boolean;
  times: Array<{ h: number, m: number, lesson: boolean, lessonN: number }>;
}
@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.scss']
})
export class TimesComponent implements OnInit {

  math = Math;
  times: Array<Time> = [];
  // Remove first element times.shift();
  constructor(private dialog: MatDialog, private http: HttpClient, private snackBar: SnackbarService, public loginService: LoginService) {
    this.http.get('/api/settings/times').subscribe((res: any) => {
      this.times = res.times;
    }, (errorr: any) => {
      this.snackBar.show(errorr.error);
    });
  }

  ngOnInit() {
  }
  wrap(num: number) {
    if (num === 0) {
      return '00';
    } else if (num < 10) {
      return (' ' + num);
      // return ('&nbsp;' + num);
    } else { return num; }
  }
  add() {
    const dialogRef = this.dialog.open(NewTimesComponent, {
      data: {},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe((callback: any) => {
      if (callback.name) {
        this.times.push(callback);
      }
    });
  }
  delete(index) {
    this.http.delete('/api/settings/times/' + this.times[index].id).subscribe((res: any) => {
      this.times.splice(index, 1);
      this.snackBar.show(res.message, 'success');
    }, error => {
      this.snackBar.show(error.error);
    });
  }
  select(index) {
    const id = this.times[index].id;
    if (this.times[index].active) {
      this.snackBar.show('Šis pamokų laikas yra numatytasis', 'warning');
      return false;
    }
    this.http.put<any>('/api/settings/times/' + id, {}).subscribe(success => {
      this.snackBar.show(success.message, 'success');
      this.times.forEach(element => {
        element.active = (element.id === id) ? true : false;
      });
    }, error => {
      this.snackBar.show(error.error, 'error');
    });
  }
  // this.http.
  //   $.ajax({
  //     data: {
  //       action: 'activeTimes',
  //       id : a
  //     },
  //     success: function(r) {
  //       if (r.status == "OK") {
  //         snackbar(r.message, 'success');
  //         var e = document.getElementsByClassName('selectBox');
  //         for (var i = 0; i < e.length; i++) if (e[i].hasAttribute('selected')) e[i].removeAttribute('selected');
  //         document.getElementById('option' + a).setAttribute('selected', '');
  //       }
  //       else snackbar(r.message, 'error');
  //     }
  //   });
  // }
}
