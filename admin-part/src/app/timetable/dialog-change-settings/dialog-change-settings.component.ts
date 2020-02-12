import { Component, OnInit } from '@angular/core';
import { SelectDisciplineComponent } from '../select-discipline/select-discipline.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-change-settings',
  templateUrl: './dialog-change-settings.component.html',
  styleUrls: ['./dialog-change-settings.component.scss']
})
export class DialogChangeSettingsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SelectDisciplineComponent>){
    
  }

  ngOnInit() {
  }

}
