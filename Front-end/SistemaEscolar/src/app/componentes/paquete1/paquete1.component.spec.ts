import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paquete1Component } from './paquete1.component';

describe('Paquete1Component', () => {
  let component: Paquete1Component;
  let fixture: ComponentFixture<Paquete1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paquete1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paquete1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
