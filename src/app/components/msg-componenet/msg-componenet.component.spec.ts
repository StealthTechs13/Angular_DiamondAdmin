import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgComponenetComponent } from './msg-componenet.component';

describe('MsgComponenetComponent', () => {
  let component: MsgComponenetComponent;
  let fixture: ComponentFixture<MsgComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
