import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { EditNotesComponent } from './edit-notes.component';

describe('EditNotesComponent', () => {
  let component: EditNotesComponent;
  let fixture: ComponentFixture<EditNotesComponent>;
  const spyAuthService = jasmine.createSpyObj('AuthService',['login','logout','signUp','isUserLoggedIn','logoutUser','getUserName']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNotesComponent ],
      imports:[HttpClientTestingModule],
      providers:[
        {provide:ActivatedRoute,useValue:{paramMap:of({id:0})}},
        {provide:AuthService,useValue:spyAuthService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
