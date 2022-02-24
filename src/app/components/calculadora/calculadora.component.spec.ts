import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [CalculadoraComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the formApp', () => {
    expect(component).toBeTruthy();
  });

  describe('[Form validations]', () => {
    describe('Control "x"', () => {
      it('When this control has an error in the inputs, be invalid control', () => {
        const tecnico = component.formulario.get('tecnico');
        const semana = component.formulario.get('semana');

        // @ts-ignore
        expect(tecnico.errors.required).toBeTruthy();
        // @ts-ignore
        expect(semana.errors.required).toBeTruthy();

        expect(tecnico?.valid).toBeFalse();
        expect(semana?.valid).toBeFalse();

        tecnico?.setValue('1082749257');
        semana?.setValue('2022-W07');

        expect(tecnico?.valid).toBeTrue();
        expect(semana?.valid).toBeTrue();
      });
    });
  });
});
