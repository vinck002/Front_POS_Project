import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {HttpClientModule} from '@angular/common/http';
import { AutorizacionComponent } from './seguridad/autorizacion/autorizacion.component';
import { appPermitDirective } from './Directives/permit-directive.directive';
import { MotrarErroresComponent } from './tools/motrar-errores/motrar-errores.component';
import { InputNumberOnlyDirective } from './Directives/input-number-only.directive';
import { InputImgComponent } from './tools/input-img/input-img.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    CoreComponent,
    AutorizacionComponent,
    appPermitDirective,
    MotrarErroresComponent,
    InputNumberOnlyDirective,
    InputImgComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule
  ],exports:[
    AutorizacionComponent,
    appPermitDirective,
    InputNumberOnlyDirective,
    MotrarErroresComponent,
    InputImgComponent
  ]
})
export class CoreModule { }
