import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';
export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password != confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {
  }
  passwordStatus1 = 'Show';
  passwordStatus2 = 'Show';
  isSignup: boolean = false;

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')
      ]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, { validators: passwordsMatchValidator() })

  get f() {
    return this.signupForm.controls;
  }

  signup(formData: any) {
    const resbody = formData.value;
    this.authService.signUp(resbody).pipe(
      this.toast.observe({
        success: 'Signup successful',
        loading: 'Signing you up..!',
        error: ({ message }) => `${message}`,
      })
    )
      .subscribe((res:any) => {
        this.isSignup = true;
        localStorage.setItem('isSignup', this.isSignup ? 'true' : 'false');
        localStorage.setItem('userId',res.userId);
        localStorage.setItem('username',res.username);
        this.router.navigate(['/view-notes']);
      },(error) => console.log(error)
      )
  }
  showOrHidePassword(x: any) {
    if (x == 'pwd1') {
      let some = document.getElementById('pwd1');
      //console.log(some?.getAttribute('type'))
      if (some?.getAttribute('type') == 'password') {
        some.setAttribute('type', 'text');
        this.passwordStatus1 = 'Hide'
      } else {
        some?.setAttribute('type', 'password');
        this.passwordStatus1 = 'Show';
      }
    } else {
      var some = document.getElementById('pwd2');
      //console.log(some?.getAttribute('type'))
      if (some?.getAttribute('type') == 'password') {
        some.setAttribute('type', 'text');
        this.passwordStatus2 = 'Hide'
      } else {
        some?.setAttribute('type', 'password');
        this.passwordStatus2 = 'Show';
      }
    }

  }

}
