import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HttpClient } from '@angular/common/http';
import { EditTimetableComponent } from '../edit-timetable/edit-timetable.component';
import { DisciplinesComponent } from 'src/app/disciplines/disciplines.component';
import { Discipline } from '../../disciplines/disciplines.component';

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
              @Inject(MAT_DIALOG_DATA) public config: { id?: number },
              private http: HttpClient,
              private disciplinesComponent: DisciplinesComponent) {
    this.current = {} as Discipline;
    if (this.config.id) {
      const index = this.disciplinesComponent.returnDisciplineIndexById(this.config.id);
      if (index > -1) {
        this.current = this.disciplinesComponent.disciplines[index];
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

    return (this.disciplinesComponent.disciplines as any).filter(
      (s: any) => new RegExp(filterValue, 'gi').test(s.name) || new RegExp(filterValue, 'gi').test(s.teacher));
  }
  selected(a: MatAutocompleteSelectedEvent) {
    // console.log(a.option.value);
    const index = this.disciplinesComponent.returnDisciplineIndexById(a.option.value);
    if (index > -1) {
      this.dialogRef.close(this.disciplinesComponent.disciplines[index]);
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
