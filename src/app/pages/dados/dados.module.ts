import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './dados.component';


@NgModule({
  declarations: [DadosComponent],
  imports: [
    CommonModule,
    DadosRoutingModule
  ]
})
export class DadosModule { }
