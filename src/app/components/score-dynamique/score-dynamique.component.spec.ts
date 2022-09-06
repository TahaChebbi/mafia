import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDynamiqueComponent } from './score-dynamique.component';

describe('ScoreDynamiqueComponent', () => {
  let component: ScoreDynamiqueComponent;
  let fixture: ComponentFixture<ScoreDynamiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreDynamiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreDynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
