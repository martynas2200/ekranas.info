import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import { Discipline, DisciplinesService } from 'src/app/disciplines.service';

@Component({
  selector: 'app-select-discipline',
  templateUrl: './select-discipline.component.html',
  styleUrls: ['./select-discipline.component.scss']
})
export class SelectDisciplineComponent implements OnInit {
  myControl = new FormControl();
  // disciplines: Array<any> = [];
  current: Discipline;
  filteredOptions: Observable<string[]>;

  constructor(private dialogRef: MatDialogRef<SelectDisciplineComponent>,
              private disciplinesService: DisciplinesService,
              @Inject(MAT_DIALOG_DATA) public config: { id?: number },
              private http: HttpClient) {
    this.current = {} as Discipline;
    if (this.config.id) {
      const index = this.disciplinesService.returnDisciplineIndexById(this.config.id);
      if (index > -1) {
        this.current = this.disciplinesService.disciplines[index];
      }
    }
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );
  }

  private filter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return (this.disciplinesService.disciplines as any).filter(
      (s: any) => new RegExp(filterValue, 'gi').test(s.name) || new RegExp(filterValue, 'gi').test(s.teacher));
  }
  selected(a: MatAutocompleteSelectedEvent) {
    // console.log(a.option.value);
    const index = this.disciplinesService.returnDisciplineIndexById(a.option.value);
    if (index > -1) {
      this.dialogRef.close(this.disciplinesService.disciplines[index]);
    } else {
      const dis: Discipline = {
        name: 'Pasirinkimas Nerastas',
        id: 0,
        teacher: 'Prašome pasirinkti iš naujo',
        room: ''
      };
      this.dialogRef.close(dis);
    }
  }
}
