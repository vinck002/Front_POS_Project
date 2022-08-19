import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { OwnerContractModule } from './owner-contract/owner-contract.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    SharedModule,
    OwnerContractModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,ReactiveFormsModule
  ],exports:[
    ReactiveFormsModule
  ],
  providers: []
  , bootstrap: [AppComponent]
})
export class AppModule { }
