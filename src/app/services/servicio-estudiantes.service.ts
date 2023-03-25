import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudiantesService {

  private urlBack = "http://localhost:3000/estudiantes"

  constructor(private http:HttpClient) {  }

  public postRequest(body:any){
    let headers = new HttpHeaders({
      'content-type': 'application/json'
    })
    return 'asdasdas'
  }
}
