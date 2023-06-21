import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class GenericService<T,D> {
  constructor(protected http: HttpClient, protected apiUrl: string) {}

  getAll(pagina:number,registroMostrar:number): Observable<any> {

    let params = new HttpParams();
    params = params.append('Pagina',pagina.toString());
    params = params.append('RecordsPorPagina',registroMostrar.toString());

    return this.http.get<T[]>(this.apiUrl,{observe:'response'});
  }

  getById(id: number): Observable<D> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<D>(url);
  }

  create(item: D): Observable<T> {
    return this.http.post<T>(this.apiUrl, item);
  }
  

  update(id: number, item: D): Observable<T> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<T>(url, item);
  }

  delete(id: Number): Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    console.log(url);
    return this.http.delete(url);
  }

  
  
}
