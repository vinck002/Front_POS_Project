import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropertyMangamentGridDto, RealEstateProperty } from '../models/interfaces/reale-state/REProperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {

  constructor(private http:HttpClient) { }

  
  Urlapi:string = environment.apiURL+'RE_Property';

public getProperty(): Observable<PropertyMangamentGridDto[]>{
return this.http.get<PropertyMangamentGridDto[]>(this.Urlapi);
}

public SaveProperty(property:RealEstateProperty){
  // var body = JSON.stringify(property);
  // // var header = new header({'content-type' : 'application/json'});
  // return this.http.post('http://localhost:56229/api/Hotels' ,body);

 return this.http.post(this.Urlapi,property)
}
// private  construirFormData(property:RealEstateProperty):FormData{
//   const formData = new FormData();
//   formData.append()
// }
}
