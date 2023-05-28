import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,pipe } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  r: boolean = false
  constructor(
    private userService:UserService,
    private _router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      const token = this.userService.getToken()
      console.log('tokenGuard',token);
      
      if (!token) {
        
        this._router.navigate(['/login'])
      }else{
        this.r=true
      }
    

    return this.r;
  }

}
