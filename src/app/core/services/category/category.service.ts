import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category, categoryCreacionDTO, categoryDTO } from '../../models/interfaces/category';
import { GenericService } from '../GenericService';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends GenericService<category,categoryDTO> {
  
  constructor(http:HttpClient) {
    const apiUrl = `${environment.apiURL}category`; // Tu URL de la API
    super(http, apiUrl);
   }  
 
   public createWithFile (category: categoryCreacionDTO): Observable<any> {
   const formData = this.construirFormData(category);
    return this.http.post<any>(this.apiUrl, formData);
  }
  updateWithFile(id: number, category: categoryCreacionDTO): Observable<any> {

    const formData = this.construirFormData(category);
    return  this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

  private construirFormData(category:categoryCreacionDTO):FormData {
    const formData = new FormData();
    formData.append('name', category.name);
    formData.append('description', category.description);
    
    if(category.image){
      formData.append('image', category.image);
    }
    return formData;
}

}
