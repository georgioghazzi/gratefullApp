import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolvingPage } from './problem-solving.page';

describe('ProblemSolvingPage', () => {
  let component: ProblemSolvingPage;
  let fixture: ComponentFixture<ProblemSolvingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemSolvingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemSolvingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
