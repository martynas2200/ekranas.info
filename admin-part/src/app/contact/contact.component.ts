import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
export interface Theme {
    value: string;
    viewValue: string;
  }

@Component({
    selector: 'app-dialog-contact-us',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})

export class ContactUsDialogComponent {
    msg = false;
    busy = false;
    themes: Theme[] = [
        {value: 'get-started-0', viewValue: 'Noriu pradėti naudoti!'},
        {value: 'questions-1', viewValue: 'Turiu klausimų!'},
        {value: 'feedback-2', viewValue: 'Atsiliepimas'}
        ];
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private snackBar: SnackbarService) {}

    submit(form: NgForm) {
        if (form.invalid) {
            return ;
        }
        console.log(form.value);
        this.busy = true;
        this.http.post('/api/contact', form.value).subscribe(success => {
            this.msg = true;
            this.busy = false;
        }, error => {
            this.busy = false;
            this.snackBar.show('Nepavyko išsiųsti', 'error');
        });
    }
}
