import { Component, OnInit, ViewChild } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { ShowHideDirective } from '@angular/flex-layout';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toast: HotToastService) { }
  ngOnInit(): void {
  }
  isLoggedin: boolean = false;
  passwordStatus = 'Show';
  loginWrongPassword = false;
  loginWrongEmail = false;
  loginFailedText = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  login(formData: any) {
    const { email, password } = formData.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        error: 'email or password is incorrect',
        loading: 'Logging you into the application',
        success: 'Login successful'
      })
    )
      .subscribe(
        (res:any) => {
          if(res.status == true){
            var userid = res.userId;
            this.isLoggedin = true;
            localStorage.setItem('isLoggedin', this.isLoggedin ? 'true' : 'false');
            localStorage.setItem('userId',userid);
            localStorage.setItem('username',res.userName);
            this.router.navigate(['/view-notes']);
          }
        },
        (error) => {
          console.log(error);
          
        }
      )
  }

  get f() {
    return this.loginForm.controls;
  }
  showOrHidePassword(){
    var some = document.getElementById('pwd');
    if(some?.getAttribute('type') == 'password'){
      some.setAttribute('type','text');
      this.passwordStatus = 'Hide'
    }else{
      some?.setAttribute('type','password');
      this.passwordStatus = 'Show';
    }
  }
  guestUserLogin(){
    const email = 'guestuser@gmail.com';
    const password = 'Guestuser123@';
    this.authService.login(email, password)
      .subscribe(
        (res:any) => {
          if(res.status == true){
            var userid = res.userId;
            this.isLoggedin = true;
            localStorage.setItem('isLoggedin', this.isLoggedin ? 'true' : 'false');
            localStorage.setItem('userId',userid);
            localStorage.setItem('username',res.userName);
            this.router.navigate(['/view-notes']);
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }

}
