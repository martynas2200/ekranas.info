import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-images-field',
  templateUrl: './images-field.component.html',
  styleUrls: ['../add-notification.component.scss','./images-field.component.scss']
})
export class ImagesFieldComponent implements OnInit {

  @Input() formData: any;
  @Output() newUpload: EventEmitter<FileList> =   new EventEmitter();
  notification: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  public initUpload(fileList: FileList) {
    this.newUpload.emit(fileList);
  }

}
