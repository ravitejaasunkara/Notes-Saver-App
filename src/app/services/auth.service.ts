import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { BehaviorSubject, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public loginStatus$!: BehaviorSubject<boolean>;
  // public signupStatus$!: BehaviorSubject<boolean>;

  constructor(private auth: Auth,private router:Router) { 
    // const loginStatus = localStorage.getItem('isLoggedin') == 'true';
    // const signupStatus = localStorage.getItem('isSignup') == 'true';
    // this.loginStatus$ = new BehaviorSubject(loginStatus);
    // this.signupStatus$ = new BehaviorSubject(signupStatus);
  }

  login(username: string, password: string) {
    // this.loginStatus$.next(true);
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  logout() {
    // this.loginStatus$.next(false);
    // this.signupStatus$.next(false);
    localStorage.removeItem('username');
    return from(this.auth.signOut());
  }

  signUp(name: string, email: string, password: string) {
    // this.signupStatus$.next(true);
    return from(
      createUserWithEmailAndPassword(this.auth, email, password)
    )
    .pipe(
      switchMap(({ user }) => updateProfile(user, { displayName: name }))
    )

  }

  getUserName(){
    return localStorage.getItem('username');
  }

  isUserLoggedIn(){
    if((localStorage.getItem('isLoggedin') !== "undefined" && localStorage.getItem('isLoggedin') != null) 
    ||(localStorage.getItem('isSignup') !== "undefined" && localStorage.getItem('isSignup') != null) ){
      return true;
    }
    return false;
  }

  logoutUser(){
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isSignup');
    this.router.navigate(['/login']);
  }
}
