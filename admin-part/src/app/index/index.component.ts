import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsDialogComponent } from '../contact/contact.component';
import { LoginService } from '../login.service';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { slide } from '../animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [slide]
})

export class IndexComponent implements OnInit {
  currentBg: string;
  currentLogo: string;
  LTdays: Array<any> = [[1, 1], [1, 13], [2, 16], [2, 24], [3, 11],
  [3, 29], [5, 1], [5, 9], [6, 14], [6, 15], [7, 6], [7, 15], [8, 23],
  [8, 31], [9, 23], [10, 25], [11, 18], [11, 23]];
  // backgrounds: string[] = ['https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&q=50&exp=-9',
  //   'https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&q=50&exp=-4',
  //   'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50&exp=-10',
  //   'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50&exp=-9',
  //   'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&q=50&exp=-9',
  //   'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&q=50&flip=h&exp=-6',
  //   'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&q=50&exp=-9',
  //   'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&q=50&exp=-4',
  //   'https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?auto=format&q=50&exp=-9',
  //   'https://images.unsplash.com/45/tkLOe7nnQ7mnMsiuijBy_hm.jpg?auto=format&q=50&exp=-9'];
    backgrounds: string[] = ['https://images.unsplash.com/photo-1516383607781-913a19294fd1?auto=format&q=50',
    'https://images.unsplash.com/photo-1468779036391-52341f60b55d?auto=format&q=50&flip=h',
    'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50',
    'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&q=50',
    'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&q=50',
    'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&q=50',
    'https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&q=50',
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&q=50&flip=h',
    'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&q=50',
    'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&q=50',
    'https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?auto=format&q=50',
    'https://images.unsplash.com/45/tkLOe7nnQ7mnMsiuijBy_hm.jpg?auto=format&q=50']
  randomNumber: number = Math.floor(Math.random() * this.backgrounds.length);
  step = 1;

  constructor(public dialog: MatDialog, public loginService: LoginService, ngaReveal: NgsRevealModule) {
    this.currentBg = 'url(\'' + this.backgrounds[this.randomNumber] + '\')';
    const curDate = new Date();
    for (const day of this.LTdays) {
      if (day[0] === curDate.getMonth() + 1 && day[1] === curDate.getDate()) {
        // getMonth() returns 0-11
        this.currentBg = "url(\'https://ekranas.info/assets/img/layout/lt.png\')";
        break;
      }
    }
    document.documentElement.style.setProperty('--image', this.currentBg);
    this.currentLogo = this.getCookie('logo');
  }

  openDialog() {
    this.dialog.open(ContactUsDialogComponent, {
      width: '90%',
      // height: '85%',
      hasBackdrop: true,
      closeOnNavigation: true,
      data: {
      }
    });
  }

  loginUser(form: NgForm) {
    this.loginService.loginAttempt(form.value);
    form.reset();
  }
  passwordReset(form: NgForm) {
    this.loginService.passwordReset(form.value).then(()=> {
      this.step = 3;
    }, () => {});

  }

  getCookie(cname: string) {
    cname += '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let c of ca) {
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return '';
  }

  scroll() {
    window.scrollTo(0, window.innerHeight)
  }

  showForgotForm() {
    this.step = 2;
  }
  hideForgotForm() {
    this.step = 1;
  }

  ngOnInit() {
  }

}
