/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainelListaComponent } from './painel-lista.component';

describe('PainelListaComponent', () => {
  let component: PainelListaComponent;
  let fixture: ComponentFixture<PainelListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
