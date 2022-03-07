import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTeenpattiListComponent } from './live-teenpatti-list.component';

describe('LiveTeenpattiListComponent', () => {
  let component: LiveTeenpattiListComponent;
  let fixture: ComponentFixture<LiveTeenpattiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTeenpattiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTeenpattiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
