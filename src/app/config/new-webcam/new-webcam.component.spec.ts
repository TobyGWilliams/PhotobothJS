import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWebcamComponent } from './new-webcam.component';

describe('NewWebcamComponent', () => {
  let component: NewWebcamComponent;
  let fixture: ComponentFixture<NewWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
