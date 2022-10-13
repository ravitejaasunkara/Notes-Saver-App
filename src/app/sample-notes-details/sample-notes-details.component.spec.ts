import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { SampleNotesDetailsComponent } from './sample-notes-details.component';

describe('SampleNotesDetailsComponent', () => {
  let component: SampleNotesDetailsComponent;
  let fixture: ComponentFixture<SampleNotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNotesDetailsComponent ],
      imports:[RouterTestingModule],
      providers:[
        {
          provide:ActivatedRoute,useValue:{paramMap:of({id:1})}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
