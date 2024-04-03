import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective {

  constructor(private Element : ElementRef, private render : Renderer2) { }

  @HostListener('mouseenter')
  onMouse(){
    this.render.setStyle(this.Element.nativeElement, 'color', 'red')
    this.render.setStyle(this.Element.nativeElement, 'font-weight', 'bold')
  }

  @HostListener('onclick')
  onMouseClick(){
    this.render.setStyle(this.Element.nativeElement, 'color', 'red')
    this.render.setStyle(this.Element.nativeElement, 'font-weight', 'bold')
    this.render.setStyle(this.Element.nativeElement, 'font-size', '30px')
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.render.setStyle(this.Element.nativeElement, 'color', 'white')
    this.render.setStyle(this.Element.nativeElement, 'font-weight', 'normal')
  }
}
