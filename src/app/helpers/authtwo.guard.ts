import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthtwoGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any{
      var userLoggedIn = localStorage.getItem('isLoggedin');
      var userSignedIn = localStorage.getItem('isSignup');
      if(userLoggedIn == 'true' || userSignedIn == 'true'){
        return this.router.parseUrl('/view-notes');
      }
      else{
        return true;
      }
  }
  
}
