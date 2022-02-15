import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from '../models/Reporte';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  API: string = 'http://localhost:1200/calculos/';

  constructor(private http: HttpClient) {}

  horasTrabajadasPorSemana(tecnico: String, semana: number): Observable<any> {
    return this.http.get<any>(`${this.API}${tecnico}/${semana}`);
  }
}
