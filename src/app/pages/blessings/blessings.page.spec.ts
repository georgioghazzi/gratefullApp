import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlessingsPage } from './blessings.page';

describe('BlessingsPage', () => {
  let component: BlessingsPage;
  let fixture: ComponentFixture<BlessingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlessingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlessingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
