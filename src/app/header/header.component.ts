import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService,private toast:HotToastService,private router:Router) { }
  currentUser:any;
  loginStatus:any;
  signupStatus:any;
  ngOnInit(): void {
    this.currentUser = localStorage.getItem('username');
  }
  logoutUser(){
    this.authService.logout().pipe(
      this.toast.observe({
        success:'Logged out successfully'
      })
    ).subscribe(res => {
      localStorage.removeItem('username');
      localStorage.removeItem('isLoggedin');
      localStorage.removeItem('isSignup');
      this.router.navigate(['/login']);
    })
  }

}
