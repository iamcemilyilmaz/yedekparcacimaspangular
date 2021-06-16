/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FavorilerComponent } from './favoriler.component';

describe('FavorilerComponent', () => {
  let component: FavorilerComponent;
  let fixture: ComponentFixture<FavorilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
