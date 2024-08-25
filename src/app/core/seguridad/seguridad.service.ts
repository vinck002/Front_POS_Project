import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreacionUsuario, CredUsuario, respuestaAutenticacion } from './seguridad';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  constructor(private httpClient:HttpClient) { }
apiUrl = environment.apiURL + 'cuenta';
private readonly token = 'llavetoken';
private readonly expiracion = 'token-Expiracion';
private readonly Role = 'role';

  
public logeado():boolean{
  //   const token = localStorage.getItem(this.token);
  //  //console.log(new Date ,this.token);
  //   if(!token){
  //   return false;
  //   }
  //   const expira = localStorage.getItem(this.expiracion);
  //   const expiracionFecha = new Date(expira!)
  //   if(expiracionFecha <= new Date)
  //   {
  //     this.logout();
  //     return false;
  //   }
    return true;
  }

public logout(){
  localStorage.removeItem(this.token);
  localStorage.removeItem(this.expiracion);

}
  public obtenerRole():string{  
    const token = localStorage.getItem(this.token);
    const helper = new JwtHelperService();
    if(!token){return '';}
    const decodedToken = helper.decodeToken(token);
     
   const roleclain = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    return roleclain? roleclain:null;
   
  }
public registrar(credenciales:CredUsuario):Observable<respuestaAutenticacion>{
  return this.httpClient.post<respuestaAutenticacion>(this.apiUrl +'/crear',credenciales)
}
public login(credenciales:CredUsuario):Observable<respuestaAutenticacion>{
  return this.httpClient.post<respuestaAutenticacion>(this.apiUrl +'/login',credenciales)
}
public CrearUsuario(credenciales: CreacionUsuario):Observable<respuestaAutenticacion>
{
return this.httpClient.post<respuestaAutenticacion>(this.apiUrl +'/crear',credenciales)
}

guardarToken(resAuntenticacion:respuestaAutenticacion){
 
localStorage.setItem(this.token,resAuntenticacion.token)
localStorage.setItem(this.expiracion,resAuntenticacion.expiracion.toString());
}

obtenerCampoJWt(campo:string):string{
  const token = localStorage.getItem(this.token);
  const helper = new JwtHelperService();
  if(!token){return '';}
  
  var dataToken = helper.decodeToken(token);
    return dataToken[campo];
}
 public ObtenerToke(){
  return localStorage.getItem(this.token)
 }

}
