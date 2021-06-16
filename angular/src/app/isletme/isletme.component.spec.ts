/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IsletmeComponent } from './isletme.component';

describe('IsletmeComponent', () => {
  let component: IsletmeComponent;
  let fixture: ComponentFixture<IsletmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsletmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
