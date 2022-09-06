import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlayerByIdComponent } from './display-player-by-id.component';

describe('DisplayPlayerByIdComponent', () => {
  let component: DisplayPlayerByIdComponent;
  let fixture: ComponentFixture<DisplayPlayerByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlayerByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPlayerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
