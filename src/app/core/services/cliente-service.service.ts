import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity, EntityCreationDto } from '../models/interfaces/Entidades/Entidad';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient) { }
  Uri = environment.apiURL + 'cliente'

  public obtenerTodos():Observable<Entity[]>{
    return this.http.get<Entity[]>(this.Uri);
  }
  public crear(cliente:EntityCreationDto):Observable<any>{
    console.log(cliente);
    return this.http.post(this.Uri,cliente);
  }

  public GuardarEdit(cliente:EntityCreationDto,id:Number):Observable<any>{
    return this.http.put(`this.Uri/${id}`,cliente);
  }
  public Edit(id:Number):Observable<EntityCreationDto>{
    return this.http.get<EntityCreationDto>(this.Uri+`/${id}`);
    }
  public Delete(id:Number):Observable<any>{
  return this.http.delete(this.Uri+`/${id}`);
  }

}
