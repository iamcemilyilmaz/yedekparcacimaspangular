/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunEkleComponent } from './urunEkle.component';

describe('UrunEkleComponent', () => {
  let component: UrunEkleComponent;
  let fixture: ComponentFixture<UrunEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
