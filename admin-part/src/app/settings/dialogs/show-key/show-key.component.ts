import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from 'src/app/ui/snackbar/snackbar.service';
import { Screen } from '../../screens/screens.component';
@Component({
  selector: 'app-show-key',
  templateUrl: './show-key.component.html',
  styleUrls: ['./show-key.component.scss']
})
export class ShowKeyComponent {
  busy = false;
  constructor(private http: HttpClient,
              private snackBar: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public config: { data: Screen }) {}

  updateKey() {
    this.http.put('/api/settings/screens/key/' + this.config.data.id, {}).subscribe((success: any) => {
      this.snackBar.show(success.message, 'success');
      this.config.data.clue = success.clue;
    }, error => {
      this.snackBar.show(error.error, 'error');
      this.busy = false;
      console.log(error);
    });
  }
}
