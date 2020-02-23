import { DisciplinesService } from './../disciplines.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDisciplineComponent } from './new-discipline/new-discipline.component';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { LoginService } from '../login.service';
import { Discipline } from '../disciplines.service';
@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private http: HttpClient,
              public loginService: LoginService,
              private snackBar: SnackbarService,
              public disciplinesService: DisciplinesService) {
  }

  ngOnInit() {

  }

  private create(): void {
    const dialogRef = this.dialog.open(NewDisciplineComponent, {
      data: { edit: false }
    });
    dialogRef.afterClosed().subscribe(callback => {
      if (callback && callback.id) {
        this.disciplinesService.disciplines.push(callback);
      }
    });
  }
  private edit(id: number): void {
    const indexx = this.disciplinesService.returnDisciplineIndexById(id);
    if (indexx !== -1) {
      const dialogRef = this.dialog.open(NewDisciplineComponent, {
        data: { edit: true, data: this.disciplinesService.disciplines[indexx]}
      });
      dialogRef.afterClosed().subscribe(callback => {
        if (callback && callback.id) {
          this.disciplinesService.disciplines[indexx] = callback;
        }
      });
    }
  }

  private remove(id: number): void {
      const indexx = this.disciplinesService.returnDisciplineIndexById(id);
      this.http.delete<any>('/api/disciplines/' + id).subscribe(success => {
        if (indexx !== -1) {
          this.disciplinesService.disciplines.splice(indexx, 1);
          this.snackBar.show(success.message, 'success');
        } else {
          this.snackBar.show('Ištrinta, bet prašome perkrauti puslapį (F5)', 'error');
        }
      }, error => {
        this.snackBar.show(error.error, 'error');
      });
  }
}
