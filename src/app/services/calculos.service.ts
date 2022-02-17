import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  API: string = 'http://localhost:1200/calculos/';

  constructor(private http: HttpClient) {}

  horasTrabajadasPorSemana(tecnico: String,anio: number, semana: number): Observable<any> {
    return this.http.get<any>(`${this.API}${tecnico}/${anio}/${semana}`);
  }
}
