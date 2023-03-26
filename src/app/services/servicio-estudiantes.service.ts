import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  //private urlBack = `${environment.api_url}/estudiantes`;

  constructor(private http:HttpClient) {  }

  public getRequest(): Observable<any>{
    return this.http.get('/estudiantes'); 
  }

  public postRequest(body:any): Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('/estudiantes/agregar',body,{'headers':headers}); 
  }
}
