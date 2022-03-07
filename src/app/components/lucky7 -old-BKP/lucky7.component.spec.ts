import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky7Component } from './lucky7.component';

describe('Lucky7Component', () => {
  let component: Lucky7Component;
  let fixture: ComponentFixture<Lucky7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lucky7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lucky7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
