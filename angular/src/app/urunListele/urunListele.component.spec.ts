/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UrunListeleComponent } from './urunListele.component';

describe('UrunListeleComponent', () => {
  let component: UrunListeleComponent;
  let fixture: ComponentFixture<UrunListeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrunListeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrunListeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
