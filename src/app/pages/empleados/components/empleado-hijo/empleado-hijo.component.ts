import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../model/empleado.interface';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input('empleados') empleados:Empleado[] = []
  @Output('radioButton') radioButton: EventEmitter<string> = new EventEmitter()

  radioSelect ="todos"
  todos:number
  masculino:number
  femenino:number

  constructor() {
   
  }
   
    ngOnInit(): void {
      this.todos= this.empleados.length
      this.femenino = this.empleados.filter(t=> t.genero == "femenino").length
      this.masculino = this.empleados.filter(t=> t.genero == "masculino").length 
    }

    changeData(){
       this.radioButton.emit(this.radioSelect)
    }
}
