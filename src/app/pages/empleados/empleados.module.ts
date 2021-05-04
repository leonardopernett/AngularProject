import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoComponent } from './components/empleado-hijo/empleado-hijo.component';
import { EmpleadoPadreComponent } from './components/empleado-padre/empleado-padre.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmpleadoHijoComponent, EmpleadoPadreComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[EmpleadoHijoComponent,EmpleadoPadreComponent]
})
export class EmpleadosModule { }
