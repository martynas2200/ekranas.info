import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Discipline {
  id: number;
  room: string;
  teacher: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DisciplinesService {
  public disciplines: Array<Discipline> = [];
  constructor(private snackBar: SnackbarService, private http: HttpClient) {
    this.http.get<any>('/api/disciplines').subscribe(success => {
      if (success.disciplines) {
        this.disciplines = success.disciplines;
      }
    }, error => {
      this.snackBar.show(error.error);
    });
  }
  public returnDisciplineIndexById(id: number) {
    return this.disciplines.findIndex(x => x.id === id);
  }
}