import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEvaluationsPage } from './daily-evaluations.page';

describe('DailyEvaluationsPage', () => {
  let component: DailyEvaluationsPage;
  let fixture: ComponentFixture<DailyEvaluationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEvaluationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEvaluationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
