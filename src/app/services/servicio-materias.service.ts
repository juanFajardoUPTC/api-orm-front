import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMateriasService {

  constructor(private http: HttpClient) { }

  public getRequest(): Observable<any> {
    return this.http.get('/materias');
  }

  public postRequest(body: any): Observable<any> {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post('/materias/agregar', body, { 'headers': headers });
  }
}
