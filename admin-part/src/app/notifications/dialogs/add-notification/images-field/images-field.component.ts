import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images-field',
  templateUrl: './images-field.component.html',
  styleUrls: ['../add-notification.component.scss','./images-field.component.scss']
})
export class ImagesFieldComponent implements OnInit {

  @Input() formData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
