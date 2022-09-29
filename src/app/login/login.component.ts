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
    username: new FormControl('',
      [
        Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',
      [
        Validators.required, Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      ]),
  });

  login(formData: any) {
    //localStorage.setItem('username',formData.get('username').value);
    const { email, password } = formData.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        error: ({ message }) => `${message}`,
        loading: 'Logging you into the application',
        success: 'Login successful'
      })
    )
      .subscribe(
        (res) => {
          this.isLoggedin = true;
          localStorage.setItem('isLoggedin', this.isLoggedin ? 'true' : 'false');
          localStorage.setItem('username',formData.get('username').value);
          this.router.navigate(['/view-notes']);
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
    //console.log(some?.getAttribute('type'))
    if(some?.getAttribute('type') == 'password'){
      some.setAttribute('type','text');
      this.passwordStatus = 'Hide'
    }else{
      some?.setAttribute('type','password');
      this.passwordStatus = 'Show';
    }
  }

}
