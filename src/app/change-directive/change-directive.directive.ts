import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[appChangeDirective]",
})
export class ChangeDirectiveDirective {
  @Input() set appChangeDirective(condition: boolean) {
    if (condition) {
      console.log('View Container Ref is'+ this.viewContainerRef);
      console.log('View Template Ref is'+ this.templateRef);
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
