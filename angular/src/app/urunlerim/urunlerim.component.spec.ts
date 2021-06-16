/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunlerimComponent } from './urunlerim.component';

describe('UrunlerimComponent', () => {
  let component: UrunlerimComponent;
  let fixture: ComponentFixture<UrunlerimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunlerimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunlerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
