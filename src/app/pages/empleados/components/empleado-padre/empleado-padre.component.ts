import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado.interface';

@Component({
  selector: 'app-empleado-padre',
  templateUrl: './empleado-padre.component.html',
  styleUrls: ['./empleado-padre.component.css']
})
export class EmpleadoPadreComponent implements OnInit {
  genero:string = 'todos'
   empleados:Empleado [] = [
     {id:1, nombre:'leonardo', apellido:'pernett', genero:'masculino', salario:5000},
     {id:1, nombre:'mile', apellido:'rios', genero:'femenino', salario:1000},
     {id:1, nombre:'pedro', apellido:'luis', genero:'masculino', salario:1000},
     {id:1, nombre:'laura', apellido:'perez', genero:'femenino', salario:8000},
     {id:1, nombre:'luis', apellido:'guzman', genero:'masculino', salario:1000},

   ]

    constructor() { }

    ngOnInit(): void {
    }


    getEmpleados(event){
      this.genero = event
    }

}
