import { Component, OnInit, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['../add-notification.component.scss', './text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  public Editor = ClassicEditor;

  @Input() formData: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
