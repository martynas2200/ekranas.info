import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteNotificationComponent } from './dialogs/delete-notification/delete-notification.component';
import { SelectNotificationComponent } from './dialogs/select-notification/select-notification.component';
import { AddNotificationComponent } from './dialogs/add-notification/add-notification.component';
import { NgxMasonryOptions } from 'ngx-masonry';
import { SnackbarService } from '../ui/snackbar/snackbar.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

export class NotificationsComponent implements OnInit {
  busy = false;

  notifications = [];
  public filters: { mode: string, textual: boolean, visual: boolean} = {
    mode: 'relevant',
    textual: true,
    visual: true
  };

  // public myOptions: NgxMasonryOptions = {
  //   //transitionDuration: '1.8s'
  // };

  constructor(private httpClient: HttpClient, private dialog: MatDialog, private snackBar: SnackbarService) { }

  getNotifications(): void {
    this.httpClient.get('/api/notifications', {
      params: {
        type: this.filters.mode
      }
    }).subscribe((res: any) => {
      // console.log(res);
      this.notifications = res.notifications;
    }, (errorr: any) => {
      // console.log(errorr);
      this.snackBar.show(errorr.error.message);
    });
  }

  selectNotificationDialog(): void {
    const dialogRef = this.dialog.open(SelectNotificationComponent, {
      data: { new: true }
    });
    dialogRef.afterClosed().subscribe(result => this.openNotificationDialog(result));
  }

  openNotificationDialog(result): void {
    const dialogRef = this.dialog.open(AddNotificationComponent, {
      data: { files: (result === 1) ? false : true, edit: false },
      width: '100%',
      maxWidth: '100vw',
      panelClass: 'main-dialog'
    });
    dialogRef.afterClosed().subscribe(callback => {
      if (callback) {
        if (typeof callback.id === 'number') {
          callback.rights = true;
          // callback.date1 = callback.date1.slice(0, 10);
          // if(callback.hasOwnProperty('date2')) {
          //   callback.date2 = callback.date2.slice(0, 10);
          // }
          this.notifications.push(callback);
        }
      }
    });
  }
  toggleVisibility(index): void {
    this.httpClient.put('/api/notifications/visibility/' + this.notifications[index].id, {}).subscribe((res: any) => {
      this.snackBar.show(res.message, 'success');
      this.notifications[index].visibility = !this.notifications[index].visibility;
    }, errorr => {
      this.snackBar.show(errorr.error.message);
    });
  }
  remove(index): void {
    // this.notifications[index].id

    const dialogRef = this.dialog.open(DeleteNotificationComponent, {
      data: { id: this.notifications[index].id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( typeof result === 'number') {
        const NotificationIndex = this.notifications.findIndex(x => x.id === result);
        this.performDeletion(NotificationIndex);
        // console.log(NotificationIndex);
      }
    });
  }

  performDeletion(index): void {
    this.httpClient.delete('/api/notifications/' + this.notifications[index].id).subscribe((res: any) => {
      this.notifications.splice(index, 1);
      this.snackBar.show(res.message, 'success');
    }, (errorr: any) => {
      this.snackBar.show(errorr.error.message);
    });
  }

  edit(index): void {
    // const dialogRef =
    const dialogRef = this.dialog.open(AddNotificationComponent, {
      data: { edit: true, data: this.notifications[index] },
      width: '95%'
    });
    dialogRef.afterClosed().subscribe(callback => {
      if (typeof callback.id === 'number') {
        this.notifications[index] = callback as Notification;
      }
    });
  }

  toggleFilter(): void {
    if (!this.busy) {
      // this.filters.mode = name;
      this.getNotifications();
    } else {
      this.snackBar.show('Prašome palaukti');
    }
  }
  toggleType(type: number): void {
    if (type === 1) {
      this.filters.textual = !this.filters.textual;
      if (!this.filters.textual && !this.filters.visual) {
        this.filters.visual = true;
      }
    } else {
      this.filters.visual = !this.filters.visual;
      if (!this.filters.textual && !this.filters.visual) {
        this.filters.textual = true;
      }
    }
  }

  ngOnInit() {
    this.getNotifications();
  }
}
