import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-notification',
  templateUrl: './select-notification.component.html',
  styleUrls: ['./select-notification.component.scss']
})
export class SelectNotificationComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  // closeDialog() {
  //   this.dialogRef.close('Pizza!');
  // }
}
