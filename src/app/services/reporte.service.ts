import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../models/Reporte';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  API: string = 'http://localhost:1200/reportes/';

  constructor(private http: HttpClient) {}

  listarReportes(): Observable<any> {
    return this.http.get<any>(this.API);
  }
}
