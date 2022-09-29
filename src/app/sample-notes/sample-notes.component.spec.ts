import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNotesComponent } from './sample-notes.component';

describe('SampleNotesComponent', () => {
  let component: SampleNotesComponent;
  let fixture: ComponentFixture<SampleNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
