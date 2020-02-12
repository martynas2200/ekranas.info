import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.sass']
})

export class DeleteNotificationComponent {

  constructor(public dialogRef: MatDialogRef<DeleteNotificationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

}
