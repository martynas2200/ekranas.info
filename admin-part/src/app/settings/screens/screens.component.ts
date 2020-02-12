import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { NewScreenComponent } from '../dialogs/new-screen/new-screen.component';
import { ShowKeyComponent } from '../dialogs/show-key/show-key.component';

export interface Screen {
  id: number;
  name: string;
  clue: string;
  settings: {
    text1: string;
    text2: string;
    bg1: string;
    bg2: string;
    primaryColor: string;
    accentColor: string;
    LT: boolean;
    timetableDuration: number;
    bellDuration: number;
    SlideDuration: number;
  };
}

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.scss']
})
export class ScreensComponent implements OnInit {
  screens: Screen[] = [];

  constructor(private dialog: MatDialog, private http: HttpClient, private snackBar: SnackbarService) {
    this.http.get('/api/settings/screens').subscribe((res: any) => {
      this.screens = res.screens;
    }, (errorr: any) => {
      this.snackBar.show(errorr.error);
    });
  }

  ngOnInit() {
  }
  add() {
    const dialog = this.dialog.open(NewScreenComponent, {
      data: { edit: false }
    });
    dialog.afterClosed().subscribe(callback => {
      if (callback.id) {
        this.screens.push(callback);
      }
    });
  }
  edit(index) {
    const dialog = this.dialog.open(NewScreenComponent, {
      data: { edit: true, data: this.screens[index] }
    });
    dialog.afterClosed().subscribe(callback => {
      if (callback.id) {
        this.screens[index] = callback;
      }
    });
  }
  showKey(index) {
    const dialog = this.dialog.open(ShowKeyComponent, {
      data: { data: this.screens[index] }
    });
    dialog.afterClosed().subscribe(callback => {
      if (typeof callback === 'string' && callback.length > 100) {
        this.screens[index].clue = callback;
      }
    });
  }
}
