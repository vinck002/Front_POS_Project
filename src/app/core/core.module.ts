import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {HttpClientModule} from '@angular/common/http';
import { AutorizacionComponent } from './seguridad/autorizacion/autorizacion.component';


@NgModule({
  declarations: [
    CoreComponent,
    AutorizacionComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],exports:[
    AutorizacionComponent
  ]
})
export class CoreModule { }
