import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad/seguridad.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private seguridadService:SeguridadService,private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.seguridadService.ObtenerToke();
    if (!this.seguridadService.logeado()) 
    {
      this.router.navigate(['/login']);
    }
    if(token){
      request = request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
      });
     
      //console.log("Paso por inteceptor" + request.toString());
    }
    
    return next.handle(request);
  }
}
