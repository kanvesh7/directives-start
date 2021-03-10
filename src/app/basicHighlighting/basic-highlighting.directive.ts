import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlighting]'
})
export class BasicHighlightingDirective implements OnInit {
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = "blue";
    this.elementRef.nativeElement.style.color = "red";
  }

}
