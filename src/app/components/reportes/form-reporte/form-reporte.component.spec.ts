import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormReporteComponent } from './form-reporte.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormReporteComponent', () => {
  let component: FormReporteComponent;
  let fixture: ComponentFixture<FormReporteComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      declarations: [FormReporteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReporteComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('[Form validations]', () => {
    describe('', () => {
      it('When this control has an error in the inputs, be invalid control', () => {
        const tecnico = component.formulario.get('tecnico');
        const servicio = component.formulario.get('servicio');
        const fecha_inicio = component.formulario.get('fecha_inicio');
        const fecha_finalizacion =
          component.formulario.get('fecha_finalizacion');

        // @ts-ignore
        expect(tecnico.errors.required).toBeTruthy();
        // @ts-ignore
        expect(servicio.errors.required).toBeTruthy();
        // @ts-ignore
        expect(fecha_inicio.errors.required).toBeTruthy();
        // @ts-ignore
        expect(fecha_finalizacion.errors.required).toBeTruthy();

        expect(tecnico?.valid).toBeFalse();
        expect(servicio?.valid).toBeFalse();
        expect(fecha_inicio?.valid).toBeFalse();
        expect(fecha_finalizacion?.valid).toBeFalse();

        tecnico?.setValue('1082749257');
        servicio?.setValue('A');
        fecha_inicio?.setValue('2022-02-17 10:30:00');
        fecha_finalizacion?.setValue('2022-02-17 10:30:00');

        expect(tecnico?.valid).toBeTrue();
        expect(servicio?.valid).toBeTrue();
        expect(fecha_inicio?.valid).toBeTrue();
        expect(fecha_finalizacion?.valid).toBeTrue();
      });
    });
  });
});
