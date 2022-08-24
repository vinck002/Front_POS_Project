import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { OwnerContractModule } from './owner-contract/owner-contract.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    SharedModule,
    OwnerContractModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,ReactiveFormsModule
  ],exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService]
  , bootstrap: [AppComponent]
})
export class AppModule { }
