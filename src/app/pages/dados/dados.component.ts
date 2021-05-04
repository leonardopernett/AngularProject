import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  dadoDerecho:string = "./assets/dados/dice1.png"
  dadoIzquierdo:string = "./assets/dados/dice4.png"

  num1:number =1;
  num2:number = 2;

  constructor() { }

  ngOnInit(): void {
  }



  tirarDado(){
     this.num1 = Math.ceil(Math.random() *6)
     this.num2 = Math.ceil(Math.random() *6)

     this.dadoIzquierdo =`./assets/dados/dice${this.num1}.png`
     this.dadoDerecho =`./assets/dados/dice${this.num2}.png`
  }

}
