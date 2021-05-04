import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {

  constructor(private el: ElementRef, private render:Renderer2) {
      this.render.setStyle(this.el.nativeElement,'font-size','25px')
   }

}
