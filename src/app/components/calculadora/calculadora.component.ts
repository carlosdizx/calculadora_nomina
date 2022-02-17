import {Component, OnInit} from '@angular/core';
import {ReporteService} from '../../services/calculos.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [],
})
export class CalculadoraComponent implements OnInit {
  formulario: FormGroup;
  mensajes: any = [];
  mensaje: any = '';

  constructor(
    private service: ReporteService,
    public formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      tecnico: '',
      semana: '',
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
      .subscribe((respuesta: any) => {
        console.log(respuesta.mensaje);
        if (typeof respuesta.mensaje === 'string') {
          this.mensaje = respuesta.mensaje;
          this.mensajes = [];
        } else {
          const resultado = Object.values(respuesta.mensaje);
          this.mensaje = resultado[0];
          this.mensajes = resultado[1];
        }
        //this.mensaje = arreglo[0];
        //this.mensajes = Object.values(respuesta)[1];
      });
  }

  ngOnInit(): void {
  }
}
