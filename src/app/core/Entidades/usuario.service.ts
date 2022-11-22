import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { user } from '../models/interfaces/Entidades/Entidad';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
Uri = environment.apiURL + 'usuario'
UriCreacion = environment.apiURL + 'cuenta'


public getUsuarios():Observable<user[]>{
  return this.http.get<user[]>(this.Uri)
}

public SaveUsuario(usuario:user){

return this.http.post(this.Uri,usuario);
}

public DeactiveUsuario(id:number){
  return this.http.post(this.Uri,id);
  }

}
