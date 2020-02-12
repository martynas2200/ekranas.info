import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {



  private snackbarSubject = new Subject<any>();
  public snackbarState = this.snackbarSubject.asObservable();

  constructor() { }

  show(message: string, type: 'error'| 'success' | 'warning' | 'info' = 'info') {
    // this.snackbarSubject.next({
    //   show: false,
    //   message: '',
    //   type: 'success'
    // });
    // setTimeout(() => {
    // }, 200, message, type);
        this.snackbarSubject.next({
          show: true,
          message,
          type
        });
  }




}
