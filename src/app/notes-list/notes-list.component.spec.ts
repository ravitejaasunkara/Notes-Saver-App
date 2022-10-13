import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesListComponent } from './notes-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('NotesListComponent', () => {
  let component: NotesListComponent;
  let fixture: ComponentFixture<NotesListComponent>;
  const spyAuthService = jasmine.createSpyObj('AuthService',['login','logout','signUp','isUserLoggedIn','logoutUser','getUserName']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesListComponent ],
      imports:[
        HttpClientTestingModule,RouterTestingModule
      ],
      providers:[
        {provide:AuthService, useValue: spyAuthService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
