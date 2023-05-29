import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMateriasService {

  constructor(private http: HttpClient) { }

  public getRequest(columna = 'codigo' , ordenamiento = 'asc' ,busquedaOne = '',busquedaThow = ''): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("columna",columna);
    queryParams = queryParams.append("ordenamiento",ordenamiento);
    queryParams = queryParams.append("busquedaOne",busquedaOne);
    queryParams = queryParams.append("busquedaThow",busquedaThow);
    //return this.http.get('https://xxybazulyl.execute-api.us-east-2.amazonaws.com/materias',{params:queryParams}); 
    return this.http.get('/materias',{params:queryParams});
  }

  public postRequest(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('https://xxybazulyl.execute-api.us-east-2.amazonaws.com/materias/agregar', body, { 'headers': headers });
  }

  public putRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.put('https://xxybazulyl.execute-api.us-east-2.amazonaws.com/materias/actualizar',body,{'headers':headers});
  }

  public patchRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.
    
    http.patch('https://xxybazulyl.execute-api.us-east-2.amazonaws.com/materias/cambiar-estado',body,{'headers':headers});
  }



}
