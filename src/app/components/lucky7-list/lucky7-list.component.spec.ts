import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lucky7ListComponent } from './lucky7-list.component';

describe('Lucky7ListComponent', () => {
  let component: Lucky7ListComponent;
  let fixture: ComponentFixture<Lucky7ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lucky7ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lucky7ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
