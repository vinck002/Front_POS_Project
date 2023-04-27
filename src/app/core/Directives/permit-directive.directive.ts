import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { SeguridadService } from '../seguridad/seguridad.service';

@Directive({
  selector: '[appPermitDirective]'
})
export class appPermitDirective implements OnInit {

  constructor(private templateref:TemplateRef<any>, 
    private SergService: SeguridadService 
    ,private viewContainer: ViewContainerRef) { }
    
    private _permisos!: string[]
// ngOnInit(): void {
//  this.UpdateView()
// }
@Input('appPermitDirective')
set permisos(permit:string[])
{
  this._permisos = permit;
if(this.tienePermisos())
  {this.viewContainer.createEmbeddedView(this.templateref);}
  else{this.viewContainer.clear();}
} ;

// @Input() //permisosUsuario!: string[] ;
// set permisosUsuario(val:string[]){this._permisosUser = val} ;

ngOnInit() {
  // if (this.tienePermisos()) {
  //   this.viewContainer.createEmbeddedView(this.Element);
  // } else {
  //   this.viewContainer.clear();
  // }
}
private tienePermisos(): boolean {
  var result = false;
  if (this.SergService.obtenerRole() === undefined){console.log('llego nulo'); return false;}
   this._permisos.forEach(p => { 
     if( this.SergService.obtenerRole().toLocaleLowerCase().includes(p)){
      result = true;
     }
    });

     return result;
  }

}

// @Input()
// set appPermitDirective(val: string) {
//   this.role = val;
//   this.UpdateView();

// }

// UpdateView(){
//   this.viewContainer.clear();
//   if(this.checkpermission()){
//     this.viewContainer.createEmbeddedView(this.templateref);
//   }
 
// }

// checkpermission():boolean {
//   let haspermision = false;
// if (this._permisos[0].toLocaleLowerCase() === this.SergService.obtenerCampoJWt('role')) {
//   haspermision = true;
//  }
//   console.log(this.SergService.obtenerCampoJWt('role'));
//   return haspermision;

// }


  

