import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../services/calculos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [],
})
export class CalculadoraComponent implements OnInit {
  formulario: FormGroup;
  mensajes: any = [];
  mensaje: string = '';
  total: number = 0;

  constructor(
    private service: ReporteService,
    public formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      tecnico: ['', [Validators.required, Validators.maxLength(20)]],
      semana: ['', [Validators.required, Validators.maxLength(15)]],
    });
  }

  horasTrabajadasPorSemana(): void {
    this.mensajes = [];
    const datos = this.formulario.value.semana.split('-');
    this.service
      .horasTrabajadasPorSemana(
        this.formulario.value.tecnico,
        datos[0],
        datos[1].substring(1)
      )
      .subscribe(
        (respuesta) => {
          this.total = 0;
          Object.values(respuesta.mensaje).forEach(
            (msg: any, index: number) => {
              const llave: string = Object.keys(respuesta.mensaje)[index];
              if (llave === 'normales') {
                this.mensajes.push('Normales ' + msg);
              } else if (llave === 'nocturnas') {
                this.mensajes.push('Nocturnas ' + msg);
              } else if (llave === 'dominicales') {
                this.mensajes.push('Dominicales ' + msg);
              } else if (llave === 'normales_extra') {
                this.mensajes.push('Normales extra ' + msg);
              } else if (llave === 'nocturnas_extra') {
                this.mensajes.push('Nocturnas extra ' + msg);
              } else {
                this.mensajes.push('Dominicales extra ' + msg);
              }
              this.total += msg;
            }
          );
          this.mensaje = '';
        },
        (error) => {
          this.mensaje = 'Sin datos';
          this.total = 0;
        }
      );
  }

  ngOnInit(): void {}
}
