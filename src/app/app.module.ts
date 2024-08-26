import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi }from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { JwtInterceptorInterceptor } from './core/interceptor/jwt-interceptor.interceptor';

import { ListaCategoriaComponent } from './Inventario/categoria/lista-categoria/lista-categoria.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';



@NgModule({ declarations: [
        AppComponent,
        NotfoundComponent,
        ListaCategoriaComponent,
        // ListaProductosComponent,
        // ProductosCreacionComponent,
        // ListaInventarioComponent,
        // CreacionInventarioComponent,
        // EntradasComponent,
        // OrdenesEntradasComponent    
    ],
    exports: [
        MaterialModule
    ],
    bootstrap: [AppComponent], imports: [SharedModule,
        MaterialModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule], providers: [CurrencyPipe,
        //CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptorInterceptor,
            multi: true
        } /*,{ provide: MY_TOKEN, useClass: String }*/, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
