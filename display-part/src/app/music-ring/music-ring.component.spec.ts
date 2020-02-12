import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRingComponent } from './music-ring.component';

describe('MusicRingComponent', () => {
  let component: MusicRingComponent;
  let fixture: ComponentFixture<MusicRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
