import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const spyAuthService = jasmine.createSpyObj('AuthService',['login','logout','signUp','isUserLoggedIn','logoutUser','getUserName']);
  const mockRouter = jasmine.createSpyObj('Router',['navigate']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[
        {provide:AuthService,useValue:spyAuthService},
        {provide:Router,useValue:mockRouter}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
