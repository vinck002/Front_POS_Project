import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {HttpClientModule} from '@angular/common/http';
import { AutorizacionComponent } from './seguridad/autorizacion/autorizacion.component';
import { appPermitDirective } from './Directives/permit-directive.directive';


@NgModule({
  declarations: [
    CoreComponent,
    AutorizacionComponent,
    appPermitDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],exports:[
    AutorizacionComponent,
    appPermitDirective
  ]
})
export class CoreModule { }
