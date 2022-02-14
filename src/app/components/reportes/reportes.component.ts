import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { Reporte } from '../../models/Reporte';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: [],
})
export class ReportesComponent implements OnInit {
  columnas: string[] = [
    'ID',
    'Técnico',
    'Servicio',
    'Fecha de inicio',
    'Fecha de finalización',
  ];

  reportes: Reporte[] = [];

  constructor(private service: ReporteService) {}

  listarReportes(): void {
    this.service
      .listarReportes()
      .subscribe((respuesta) => (this.reportes = respuesta.reportes));
  }

  ngOnInit(): void {
    this.listarReportes();
  }
}
