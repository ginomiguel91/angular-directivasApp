import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() set customIf(condicion: boolean) {
    if (condicion) {
      this.viewContainer.createEmbeddedView(this.templateRef); //mostrar elemento
    } else {
      this.viewContainer.clear(); //ocultar el elemento
    }
  }
  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
}
