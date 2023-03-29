import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMateriasService {

  constructor(private http: HttpClient) { }

  public getRequest(columna:string , ordenamiento:string ,busqueda:string): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("columna",columna);
    queryParams = queryParams.append("ordenamiento",ordenamiento);
    queryParams = queryParams.append("busqueda",busqueda);
    return this.http.get('/materias',{params:queryParams}); 
  }

  public postRequest(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('/materias/agregar', body, { 'headers': headers });
  }
}
