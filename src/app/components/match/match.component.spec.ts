import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MATChComponent } from './match.component';

describe('MATChComponent', () => {
  let component: MATChComponent;
  let fixture: ComponentFixture<MATChComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MATChComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MATChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
