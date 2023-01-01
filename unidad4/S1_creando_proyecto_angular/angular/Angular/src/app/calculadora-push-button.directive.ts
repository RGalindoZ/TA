import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[pruebaDeDirectiva]'
})
export class CalculadoraPushButtonDirective implements OnInit {

  @Input('pruebaDeDirectiva') show = false;
  constructor(
    private viewContainerRef: ViewContainerRef, 
    private template: TemplateRef<any>
  ) { }
    
  ngOnInit():void {
    if(this.show) this.viewContainerRef.createEmbeddedView(this.template);
  }
}
