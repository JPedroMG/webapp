import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Probando123Component } from './probando123.component';

describe('Probando123Component', () => {
  let component: Probando123Component;
  let fixture: ComponentFixture<Probando123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Probando123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Probando123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
