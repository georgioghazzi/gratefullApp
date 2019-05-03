import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationsPage } from './affirmations.page';

describe('AffirmationsPage', () => {
  let component: AffirmationsPage;
  let fixture: ComponentFixture<AffirmationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffirmationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffirmationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
