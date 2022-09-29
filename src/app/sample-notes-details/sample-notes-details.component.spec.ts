import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNotesDetailsComponent } from './sample-notes-details.component';

describe('SampleNotesDetailsComponent', () => {
  let component: SampleNotesDetailsComponent;
  let fixture: ComponentFixture<SampleNotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNotesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
