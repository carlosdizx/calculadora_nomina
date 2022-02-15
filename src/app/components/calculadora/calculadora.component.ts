import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/calculos.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [],
})
export class CalculadoraComponent implements OnInit {
  constructor(private service: ReporteService) {}

  horasTrabajadasPorSemana(): void {
    this.service
      .horasTrabajadasPorSemana('1082749257', 13)
      .subscribe((respuesta) => {
        console.log(respuesta);
      });
  }

  ngOnInit(): void {}
}
