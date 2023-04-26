import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SeguridadService } from '../seguridad/seguridad.service';

@Directive({
  selector: '[appPermitDirective]'
})
export class PermitDirectiveDirective implements OnInit {

  private role?: string
  constructor(private Element:TemplateRef<any>, 
    private SergService: SeguridadService 
    ,private viewContainer: ViewContainerRef) { }

ngOnInit(): void {
 // this.UpdateView()
}
@Input()
set appPermitDirective(val: string) {
  this.role = val;
  this.UpdateView();
}
UpdateView(){
  this.viewContainer.clear();
  if(this.checkpermission()){
    this.viewContainer.createEmbeddedView(this.Element);
  }
 // 
}

checkpermission():boolean {
  let haspermision = false;
if (this.role?.toLocaleLowerCase() === this.SergService.obtenerCampoJWt('role')) {
  haspermision = true;
 }

  return haspermision;

}


  
}
