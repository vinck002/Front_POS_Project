import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity, EntityCreationDto } from '../models/interfaces/Entidades/Entidad';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http:HttpClient) { }
  
  Uri = environment.apiURL + 'cliente'

  public GetAll(pagina:number,registroMostrar:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('Pagina',pagina.toString());
    params = params.append('RecordsPorPagina',registroMostrar.toString());

    return this.http.get<Entity[]>(this.Uri,{observe:'response'});
  }
  // public Create(cliente:EntityCreationDto):Observable<any>{
  //   return this.http.post(this.Uri,cliente);
  // }

  public Save(cliente:EntityCreationDto,id:Number){

    if(!id){
      return this.http.post(this.Uri,cliente,{headers:{'Content-Type': 'application/json; charset=utf-8'}});
    }  else{
      return this.http.put(`${this.Uri}/${id}`,cliente,{headers:{'Content-Type': 'application/json; charset=utf-8'}});
    }
  }
  public FindByID(id:Number):Observable<EntityCreationDto>{
    return this.http.get<EntityCreationDto>(this.Uri + `/${id}`);
    }
  public Delete(id:Number):Observable<any>{
  return this.http.delete(this.Uri+`/${id}`);
  }

}
