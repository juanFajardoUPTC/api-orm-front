import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  todo:any;

  constructor(
    private userService:UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(email:string,contrasena:string){
    if(!email || !contrasena){
      alert('Ingrese los datos completos')
    }
    else{
      console.log({
        email: email,
        password: contrasena 
      });
      
      this.userService.validateUser({
        email: email,
        password: contrasena 
      }).subscribe(res=>{
        if(!res.token){
          alert('El usuario no existe, intente de nuevo')
        }else{
          this.setToken(res.token)
          this.router.navigate(['home'])
        }
      })
      //Borrar cuando se implemente la api
      this.router.navigate(['home'])
    }
    
  }

  getTodo(){
    this.userService.getTodo().subscribe((data)=>{
      this.todo = data
    })
  }

  setToken(token = 'Token de prueba'){
    this.userService.setToken(token)
  }

  removeToken(){
    this.userService.removeToken()
  }

}
