import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../../models/Reporte';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReporteService } from '../../../services/reporte.service';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html',
  styleUrls: [],
})
export class FormReporteComponent implements OnInit {
  reporte: Reporte = new Reporte();
  public formulario: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private service: ReporteService
  ) {
    this.formulario = this.formBuilder.group({
      tecnico: '',
      servicio: '',
      fecha_inicio: new Date(),
      fecha_finalizacion: new Date(),
    });
  }

  registrarReporte(): void {
    this.reporte.tecnico = this.formulario.value.tecnico;
    this.reporte.servicio = this.formulario.value.servicio;
    this.reporte.fecha_inicio = this.formulario.value.fecha_inicio;
    this.reporte.fecha_finalizacion = this.formulario.value.fecha_finalizacion;
    console.log(this.reporte);
    this.service.registrarReporte(this.reporte).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error) => {
        console.log(error.error.errors);
      }
    );
  }

  ngOnInit(): void {}
}
