import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  private imagenes = environment.api_imagenes

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
    return this.http.post('/estudiantes/agregar',body,{'headers':headers}); 
  }
  public getImg(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post(this.imagenes,body,{'headers':headers});
  }
  public UploadPresigned(url:string, body:any) {
    let headers = new HttpHeaders({
      'content-type': '/',
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,PUT"
        })
    return this.http.put(url, body,{'headers':headers});
  }
}
