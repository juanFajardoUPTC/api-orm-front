import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioInscripcionesService {

  constructor(private http: HttpClient) { }
  public getRequest(columna:string , ordenamiento:string ,busqueda:string): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("columna",columna);
    queryParams = queryParams.append("ordenamiento",ordenamiento);
    queryParams = queryParams.append("busqueda",busqueda);
    return this.http.get('/inscripciones',{params:queryParams}); 
  }


  public postRequest(body: any): Observable<any> {
    console.log(body)
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('/inscripciones/agregar', body, { 'headers': headers });
    //return aws
  }

  public putRequest(body:any): Observable<any>{
    console.log("a actualizar eon:"  ,body)

    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
  return this.http.put('/inscripciones/actualizar',body,{'headers':headers});
  }

  public patchRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.patch('/inscripciones/cambiar-fecha',body,{'headers':headers});

  }

}

