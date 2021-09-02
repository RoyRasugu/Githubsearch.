import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorHover]'
})
export class ColorHoverDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.elem.nativeElement.style.backgroundColor = 'rgb(248, 211, 0)';
  }

  @HostListener('mouseout') onOut(){
    this.elem.nativeElement.style.backgroundColor = "#fff";
  }
}
