import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeguridadService } from '../seguridad/seguridad.service';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private seguridadService:SeguridadService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.seguridadService.ObtenerToke();
    if(token){
      request = request.clone({
      setHeaders: {Authorization: `Bearer ${token}`}
      });
      

    }
    return next.handle(request);
  }
}
