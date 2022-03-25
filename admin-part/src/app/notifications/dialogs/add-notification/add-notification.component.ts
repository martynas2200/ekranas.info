import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/login.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
interface Notification {
  id: number;
  date1: string;
  date2: string;
  showBefore: boolean;
  visibility: boolean;
  repeatTimes: boolean;
  note: string;
  important: boolean;
  style: null;
  author: string;
  displayAuthor: boolean;
  images: Array<any>;
}
@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent  {
  busy = false;
  formData: Notification = {} as Notification;

  constructor(public dialogRef: MatDialogRef<AddNotificationComponent>,
              @Inject(MAT_DIALOG_DATA) public config: {files: boolean; edit: boolean; data: Notification },
              private loginService: LoginService, private http: HttpClient,
              private snackBar: SnackbarService) {
    // console.log(config.files);
    if (!config.edit) {
      // Kuriamas naujas pranešimas
      this.formData.displayAuthor = false;
      this.formData.important = false;
      this.formData.showBefore = true;
      this.formData.visibility = true;
      this.formData.repeatTimes = false;
      this.formData.note = '';
      this.formData.author = this.loginService.user.name;
      this.formData.images = [];
    } else {
      this.formData = Object.assign({}, config.data);
      config.files = this.formData.images.length > 0 ? true : false;
    }
  }
  getDateString(date: Date): string {
    if (!date) {
      return '0000-00-00';
    }
    let dateString = date.getFullYear() + '-';
    if (date.getMonth() + 1 < 10) { dateString += '0'; }
    dateString += (date.getMonth() + 1) + '-';
    if (date.getDate() < 10) { dateString += '0'; }
    dateString += date.getDate();
    return dateString;
  }
  showDatesList() {
    const dates: string[] = [];
    const date1 = new Date(this.formData.date1);
    if (isNaN(date1.getTime())) {
      return 'Nenurodyta data!';
    }
    const date2 = new Date(this.formData.date2);
    const dayminus = new Date(this.formData.date1);
    dayminus.setDate(dayminus.getDate() - 1);
    // --------------------------------------------
    if (this.formData.showBefore) {
      dates.push(this.getDateString(dayminus), this.getDateString(date1));
    } else {
      dates.push(this.getDateString(date1));
    }
    if (this.formData.repeatTimes) {
      if (isNaN(date2.getTime())) {
        return 'Nenurodyta data!';
      }
      // Select last Date in array
      const d = new Date(dates[dates.length - 1]);
      d.setDate(d.getDate() + 1);
      for (const dii = d; dii <= date2 ; dii.setDate(dii.getDate() + 1)) {
        dates.push(this.getDateString(dii));
      }
    }
    return 'Pranešimas bus rodomas ' + dates.join(', ');

  }
  submit(form: NgForm) {
    if (form.invalid) { return ; }
    this.busy = true;
    if (!this.config.edit) {
      delete this.formData.id;
      this.http.post<any>('/api/notifications', {
        notification: this.formData
      }).subscribe(success => {
        // console.log(success.notification);
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.notification);
      }, error => {
        this.snackBar.show(error.error.message, 'error');
        this.busy = false;
        // console.log(error);
      });
    } else {
      this.http.put<any>('/api/notifications/' + this.config.data.id, {
        notification: this.formData
      }).subscribe(success => {
        // console.log(success.notification);
        this.snackBar.show(success.message, 'success');
        this.dialogRef.close(success.notification);
      }, error => {
        this.snackBar.show(error.error.message, 'error');
        this.busy = false;
        // console.log(error);
      });
    }

  }
  public uploadsDistribution(fileList: FileList) {
    // console.log(fileList);
  // uploadsDistribution(a: any) {
  //   console.log(a);
    if (fileList.length <= 0) {
      return false;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let x = 0; x < fileList.length; x++) {
      const id = Math.floor(Math.random() * 10000000 + 20);
      this.upload(fileList[x], id);
      this.formData.images.push({name: fileList[x].name, size: fileList[x].size, id, url: 'assets/p.gif'});
    }
  }
  // checkURL: function () {
  //   var url = $('input#image-url').val();
  //   if (!url) {
  //     snackbar('Nenurodyta nuoroda', 'warning');
  //     return false;
  //   }
  //   var regx = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?([^ ])+");
  //   if (!url.match(regx)) {
  //     snackbar('Neteisingai nurodyta nuoroda', 'error');
  //     return false;
  //   }
  //   let id = 'p' + Math.floor(Math.random() * 100000 + 20);
  //   let name = getFileName(url);
  //   if (!name) {
  //     snackbar('Nuoroda neturi nurodyto failo vardo', 'warning');
  //     return false;
  //   }
  //   // Siųsti
  //   $.ajax({
  //     data: {action: 'url_upload', url: url.match(regx)[0]},
  //     success: notifications.afterUpload(g),
  //     error: function () {
  //       alert("Užklausa nepavyko bandykite vėliau :(");
  //     }
  //   });
  // },
  removeUpload(id): void {
    const index = this.formData.images.findIndex(x => x.id === id);
    this.formData.images.splice(index, 1);
  }
  upload(fileToUpload: any, id: number): void {
    const uploadData = new FormData();
    uploadData.append('image', fileToUpload);

    this.http.post<any>('/api/uploads', uploadData).subscribe(success => {
      const index = this.formData.images.findIndex(x => x.id === id);
      if (index > -1) {
        this.snackBar.show(success.message, 'success');
        this.formData.images[index] = success.image;
      } else {
        this.snackBar.show('Gaila, bet failas įkėlimo metu pasiklydo bandyk dar kartą', 'error');
        // restart browser;
      }
    }, error => {
      const index = this.formData.images.findIndex(x => x.id === id);
      if (index > -1) {
        this.formData.images.splice(index, 1);
      }
      this.snackBar.show(error.error, 'error');
    });
  }
}
