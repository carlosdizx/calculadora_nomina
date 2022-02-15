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
  servicios: any[] = [];
  reporte: Reporte = new Reporte();
  formulario: FormGroup;
  errores: any[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private service: ReporteService
  ) {
    this.formulario = this.formBuilder.group({
      tecnico: '',
      servicio: '',
      fecha_inicio: '',
      fecha_finalizacion: '',
    });
  }

  listarServicios(): any {
    this.service
      .listarServicios()
      .subscribe((respuesta: any) => (this.servicios = respuesta.servicios));
  }

  registrarReporte(): void {
    this.reporte.tecnico = this.formulario.value.tecnico;
    this.reporte.servicio = this.formulario.value.servicio;
    this.reporte.fecha_inicio = this.formulario.value.fecha_inicio;
    this.reporte.fecha_finalizacion = this.formulario.value.fecha_finalizacion;
    this.errores = [];
    this.service.registrarReporte(this.reporte).subscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error) => {
        if (error.error.errors) {
          this.errores = error.error.errors;
        } else {
          this.errores.push(error.error.error)
        }
      }
    );
  }

  ngOnInit(): void {
    this.listarServicios();
  }
}
