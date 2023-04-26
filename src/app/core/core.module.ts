import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {HttpClientModule} from '@angular/common/http';
import { AutorizacionComponent } from './seguridad/autorizacion/autorizacion.component';
import { PermitDirectiveDirective } from './Directives/permit-directive.directive';


@NgModule({
  declarations: [
    CoreComponent,
    AutorizacionComponent,
    PermitDirectiveDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],exports:[
    AutorizacionComponent,
    PermitDirectiveDirective
  ]
})
export class CoreModule { }
