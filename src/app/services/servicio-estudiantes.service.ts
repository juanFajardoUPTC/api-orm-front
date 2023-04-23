import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  constructor(private http:HttpClient) {  }

  public getRequest(columna = 'codigo' , ordenamiento = 'asc' ,busqueda = ''): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("columna",columna);
    queryParams = queryParams.append("ordenamiento",ordenamiento);
    queryParams = queryParams.append("busqueda",busqueda);
    return this.http.get('https://rzv75m7ksk.execute-api.us-east-2.amazonaws.com/students',{params:queryParams}); 
  }

  public postRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('https://rzv75m7ksk.execute-api.us-east-2.amazonaws.com/students/agregar',body,{'headers':headers}); 
  }
}
