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
    //return this.http.get('/estudiantes',{params:queryParams}); 
    
  }
  

  public postRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('https://rzv75m7ksk.execute-api.us-east-2.amazonaws.com/students/agregar',body,{'headers':headers}); 
   // return this.http.post('/estudiantes/agregar',body,{'headers':headers});
  }

  public putRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.put(' https://rzv75m7ksk.execute-api.us-east-2.amazonaws.com/students/actualizar',body,{'headers':headers});
  }

  public patchRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.
    
    http.patch('https://rzv75m7ksk.execute-api.us-east-2.amazonaws.com/students/cambiar-estado',body,{'headers':headers});
  }

/*
  cambiarEstado(codigo: number): Observable<any> {
    const estudiante = { codigo: codigo, estado: 'I' };
    return this.http.patch(url, estudiante);
  }*/

}
