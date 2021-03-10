import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighting]'
})
export class BetterHighlightingDirective implements OnInit {

  @Input() defaultColor: string = 'green';
  @Input() changeColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string; //This is used to set style

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener("mouseenter") mouseover(eventData: Event){
    this.backgroundColor = this.changeColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // )
  }
  @HostListener("mouseleave") mouseleave(eventData: Event){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // )
  }
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "green"
    // )
  }

}
