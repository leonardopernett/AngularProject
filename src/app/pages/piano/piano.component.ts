import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  aplicarSonido(num:any){
    const audio = new Audio()
    audio.src=`./assets/sonidos/note${num}.wav`
    audio.play()
  }


}
