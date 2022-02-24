import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReportesComponent } from './reportes.component';
import { DebugElement } from '@angular/core';
import { Reporte } from '../../models/Reporte';

describe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ReportesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'No hay reportes que mostrar' and exist 0 reports`, () => {
    expect('No hay reportes que mostrar').toEqual(component.titulo);
    expect(component.reportes.length).toEqual(0);
  });

  afterAll(() => {
    for (let i = 0; i < 5; i++) {
      const reporte: Reporte = new Reporte();
      reporte.id = i + 1;
      component.reportes.push(reporte);
    }
    expect(component.reportes.length).toEqual(5);
    expect(component.reportes.length > 0).toBeTrue();
  });
});
