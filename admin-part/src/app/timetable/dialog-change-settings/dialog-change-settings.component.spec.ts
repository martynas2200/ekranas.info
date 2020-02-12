import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeSettingsComponent } from './dialog-change-settings.component';

describe('DialogChangeSettingsComponent', () => {
  let component: DialogChangeSettingsComponent;
  let fixture: ComponentFixture<DialogChangeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChangeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChangeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
