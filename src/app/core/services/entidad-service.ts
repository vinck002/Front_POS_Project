import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entity, EntityCreationDto } from '../models/interfaces/Entidades/Entidad';
//export const MY_TOKEN = new InjectionToken<string>('entidad');
@Injectable({
  providedIn: 'root'
})

export class EntidadService {
  constructor(private http:HttpClient) { 
  }


  Uri = environment.apiURL 

  public GetAll(urlEntidad:string,pagina:number,registroMostrar:number):Observable<any>{
    let params = new HttpParams();
    params = params.append('Pagina',pagina.toString());
    params = params.append('RecordsPorPagina',registroMostrar.toString());

    return this.http.get<Entity[]>(this.FullUri(urlEntidad),{observe:'response'});
  }
  
  public Save(urlEntidad:string,Entidad:EntityCreationDto,id:Number){
console.log(Entidad)
    if(!id){
      return this.http.post(this.FullUri(urlEntidad),Entidad);
    }  else{
      return this.http.put(`${this.FullUri(urlEntidad)}/${id}`,Entidad);
    }
  }
  public FindByID(urlEntidad:string,id:Number):Observable<EntityCreationDto>{
    return this.http.get<EntityCreationDto>(this.FullUri(urlEntidad) + `/${id}`);
    }
  public Delete(urlEntidad:string,id:Number):Observable<any>{
  return this.http.delete(this.FullUri(urlEntidad)+`/${id}`);
  }

  private FullUri(urlEntidad:string):string{
    return `${this.Uri}${urlEntidad}`;

  }
}
