import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormReporteComponent } from './components/reportes/form-reporte/form-reporte.component';
import {CalculadoraComponent} from "./components/calculadora/calculadora.component";

const routes: Routes = [
  { path: 'reportes', component: ReportesComponent },
  { path: 'reportes/crear', component: FormReporteComponent },
  { path: 'calculadora', component: CalculadoraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
