import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paquete2Component } from './paquete2.component';

describe('Paquete2Component', () => {
  let component: Paquete2Component;
  let fixture: ComponentFixture<Paquete2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paquete2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paquete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
