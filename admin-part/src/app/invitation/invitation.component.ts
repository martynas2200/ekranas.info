import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { User } from '../login.service';
import { NgForm } from '@angular/forms';
import { SnackbarService } from '../ui/snackbar/snackbar.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ height: '0px', margin: '0px'  }),
        animate('0.5s 300ms ease-in', style({ height: '*' }))
      ]),
      transition(':leave', [
        style({ height: '*'  }),
        animate('0.3s ease-out', style({ height: '0px', margin: '0px'  }))
      ])
    ])
  ]
})
export class InvitationComponent implements OnInit {
  state: 'busy' | 'edit' | 'end' | 'error' = 'busy';
  user: any = {} as User;
  passwordReset = false;
  usernameDialog = false;

  constructor(private http: HttpClient, private route: ActivatedRoute, private snackBar: SnackbarService) {
    this.http.get('/api/users/' + this.route.snapshot.paramMap.get('clue')).subscribe((success: any) => {
      this.user = success.user;
      this.passwordReset = success.passwordReset;
      this.state = 'edit';
    }, () => {
      this.state = 'error';
    });
  }

  ngOnInit() {
  }

  submit(form: NgForm) {
    if (form.invalid) {
      this.snackBar.show('Prašome užpildyti visus formos laukelius', 'error');
      return;
    }
    this.state = 'busy';
    this.http.post('/api/users/' + this.route.snapshot.paramMap.get('clue'), form.value).subscribe((success: any) => {
      this.user = success.user;
      this.state = 'end';
    }, (error) => {
      this.state = 'edit';
      this.snackBar.show(error.error, 'error');
    });
    console.log(form.value);
  }

}
