import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAuth = environment.api_authorizer


  constructor(
    private http:HttpClient
  ) { }

  getToken(){
    return localStorage.getItem('token')
  }
  setToken(token:any){
    return localStorage.setItem('token',token)
  }
  removeToken(){
    return localStorage.removeItem('token')
  }

  validateUser(body:any):Observable<any>{
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    })
    return this.http.post<any>(this.urlAuth,body,{'headers':headers}); 
  }

  //Test
  getTodo():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }
}
