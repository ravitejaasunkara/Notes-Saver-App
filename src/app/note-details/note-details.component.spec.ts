import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { NoteDetailsComponent } from './note-details.component';

describe('NoteDetailsComponent', () => {
  let component: NoteDetailsComponent;
  let fixture: ComponentFixture<NoteDetailsComponent>;
  const spyAuthService = jasmine.createSpyObj('AuthService',['login','logout','signUp','isUserLoggedIn','logoutUser','getUserName']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDetailsComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[
        {provide:ActivatedRoute,useValue:{paramMap:of({id:1})}},
        {provide:AuthService,useValue: spyAuthService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
