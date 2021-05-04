import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasRoutingModule } from './preguntas-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';
import { BotoneraComponent } from './components/pregunta/botonera/botonera.component';



@NgModule({
  declarations: [DashboardComponent, NavbarComponent, PreguntaComponent, RespuestaComponent, BotoneraComponent],
  imports: [
    CommonModule,
    PreguntasRoutingModule
  ]
})
export class PreguntasModule { }
