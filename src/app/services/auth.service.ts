import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { BehaviorSubject, from, switchMap } from 'rxjs';
import { notesUrl } from 'src/global';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: Auth,private router:Router,private http:HttpClient) { 
  }

  login(username: string, password: string) {
    return this.http.post(notesUrl+'/auth/login',{"email":username,"password":password});
  }

  logout() {
    localStorage.removeItem('username');
    return from(this.auth.signOut());
  }

  signUp(body:any) {
    return this.http.post(notesUrl+'/auth/signup',body);
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
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
