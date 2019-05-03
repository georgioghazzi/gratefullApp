import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratefulPage } from './grateful.page';

describe('GratefulPage', () => {
  let component: GratefulPage;
  let fixture: ComponentFixture<GratefulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratefulPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratefulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
