import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { GenericService } from '../GenericService';
import { Product, ProductoCreacionDTO, UnitType, productDTO } from '../../models/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends GenericService<Product,productDTO> {
  
  constructor(http:HttpClient) {
    const apiUrl = `${environment.apiURL}product`; // Tu URL de la API
    super(http, apiUrl);
   }  
 
   public createWithFile (item: ProductoCreacionDTO): Observable<any> {
   const formData = this.construirFormData(item);
    return this.http.post<any>(this.apiUrl, formData);
  }
  updateWithFile(id: number, item: ProductoCreacionDTO): Observable<any> {

    const formData = this.construirFormData(item);
    return  this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

public getUnitType(): Observable<UnitType[]> {

  return this.http.get<UnitType[]>(`${this.apiUrl}/Unit`);
}

  private construirFormData(item:ProductoCreacionDTO):FormData {
    
    const formData = new FormData();
    formData.append('name', item.name);
    formData.append('description', item.description);

    formData.append('Barcode', item.barcode!);
    formData.append('Inventary_min', item.inventary_min !== undefined?item.inventary_min.toString(): '' );
     formData.append('Price_in', item.price_in !== undefined?item.price_in.toString(): '') ;
     formData.append('Price_out', item.price_out !== undefined?item.price_out.toString(): '');
    formData.append('UnitID', item.unitID !== undefined?item.unitID.toString(): '1' );

    formData.append('CategoryId', item.categoryId !== undefined? item.categoryId.toString():'1');    
    
      if(item.image){
      formData.append('image', item.image);
    }
    return formData;
}

}
