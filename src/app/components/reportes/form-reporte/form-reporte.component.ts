import { Component, OnInit } from '@angular/core';
import { Reporte } from '../../../models/Reporte';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reporte',
  templateUrl: './form-reporte.component.html',
  styleUrls: [],
})
export class FormReporteComponent implements OnInit {
  reporte: Reporte = new Reporte();
  public formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      tecnico: '',
      servicio: '',
      fecha_inicio: '',
      fecha_finalizacion: '',
    });
  }

  ngOnInit(): void {}
}
