import { Respuesta } from "./respuesta";

export class Pregunta {
    descripcion:string;
    respuestas:Array<Respuesta>

    constructor(description:string, respuestas:Respuesta[]){
      this.descripcion = description
      this.respuestas = respuestas
    }
}