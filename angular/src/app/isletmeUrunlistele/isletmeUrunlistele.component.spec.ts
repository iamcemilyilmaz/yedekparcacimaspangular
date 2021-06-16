/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IsletmeUrunlisteleComponent } from './isletmeUrunlistele.component';

describe('IsletmeUrunlisteleComponent', () => {
  let component: IsletmeUrunlisteleComponent;
  let fixture: ComponentFixture<IsletmeUrunlisteleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsletmeUrunlisteleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsletmeUrunlisteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
