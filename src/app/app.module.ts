import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportesComponent } from './components/reportes/reportes.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [AppComponent, ReportesComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
