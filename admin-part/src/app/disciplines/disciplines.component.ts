import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewDisciplineComponent } from './new-discipline/new-discipline.component';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { LoginService } from '../login.service';
export interface Discipline {
  id: number;
  room: string;
  teacher: string;
  // dec: string;
  name: string;
}

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {
  disciplines: Array<Discipline> = [];

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              public loginService: LoginService,
              private snackBar: SnackbarService) {
    this.http.get<any>('/api/disciplines').subscribe(success => {
      if (success.disciplines) {
        this.disciplines = success.disciplines;
      }
    }, error => {
      this.snackBar.show(error.error);
    });
  }

  ngOnInit() {

  }

  private create(): void {
    const dialogRef = this.dialog.open(NewDisciplineComponent, {
      data: { edit: false }
    });
    dialogRef.afterClosed().subscribe(callback => {
      if (callback && callback.id) {
        this.disciplines.push(callback);
      }
    });
  }
  private edit(id: number): void {
    const indexx = this.returnDisciplineIndexById(id);
    if (indexx !== -1) {
      const dialogRef = this.dialog.open(NewDisciplineComponent, {
        data: { edit: true, data: this.disciplines[indexx]}
      });
      dialogRef.afterClosed().subscribe(callback => {
        if (callback && callback.id) {
          this.disciplines[indexx] = callback;
        }
      });
    }
  }

  private remove(id: number): void {
      const indexx = this.returnDisciplineIndexById(id);
      this.http.delete<any>('/api/disciplines/' + id).subscribe(success => {
        if (indexx !== -1) {
          this.disciplines.splice(indexx, 1);
          this.snackBar.show(success.message, 'success');
        } else {
          this.snackBar.show('Ištrinta, bet prašome perkrauti puslapį (F5)', 'error');
        }
      }, error => {
        this.snackBar.show(error.error, 'error');
      });
  }

  public returnDisciplineIndexById(id: number) {
    return this.disciplines.findIndex(x => x.id === id);
  }
}
