import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/reporte.service';
import { Reporte } from '../../models/Reporte';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['reportes.component.css'],
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

  titulo: string = '';

  constructor(private service: ReporteService) {}

  listarReportes(): void {
    this.service
      .listarReportes()
      .subscribe((respuesta) => (this.reportes = respuesta.reportes));
  }

  ngOnCreated(): void {
    this.listarReportes();
  }

  ngOnInit(): void {
    if (this.reportes.length > 0) {
      this.titulo = 'Listado de reportes';
    } else {
      this.titulo = 'No hay reportes que mostrar';
    }
  }
}
