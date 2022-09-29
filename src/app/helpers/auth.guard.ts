import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    var userLoginInfo = localStorage.getItem('isLoggedin');
    var userSignupInfo = localStorage.getItem('isSignup');
    if (userLoginInfo == 'true' || userSignupInfo == 'true') {
      return true;
    }
    else {
      return this.router.parseUrl('/login');
    }
  }

}
