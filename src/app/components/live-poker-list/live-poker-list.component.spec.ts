import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePokerListComponent } from './live-poker-list.component';

describe('LivePokerListComponent', () => {
  let component: LivePokerListComponent;
  let fixture: ComponentFixture<LivePokerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePokerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePokerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
