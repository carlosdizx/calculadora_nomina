import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/calculos.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [],
})
export class CalculadoraComponent implements OnInit {
  formulario: FormGroup;
  mensajes: String[] = [];

  constructor(
    private service: ReporteService,
    public formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      tecnico: '',
      semana: 0,
    });
  }

  horasTrabajadasPorSemana(): void {
    this.mensajes = [];
    const semana = this.formulario.value.semana.split('W')[1];
    console.log(this.formulario.value.semana.split("W"));
    this.service
      .horasTrabajadasPorSemana(this.formulario.value.tecnico, semana)
      .subscribe((respuesta: any) => {
        this.mensajes = Object.values(respuesta);
      });
  }

  ngOnInit(): void {}
}
