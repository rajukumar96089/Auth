import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangebackground]'
})
export class ChangebackgroundDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }
  @HostListener('mouseenter')
  OnEnter() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'grey')
  }
  @HostListener('mouseleave')
  onOut() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'white')
  }

}




