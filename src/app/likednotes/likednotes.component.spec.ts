import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikednotesComponent } from './likednotes.component';

describe('LikednotesComponent', () => {
  let component: LikednotesComponent;
  let fixture: ComponentFixture<LikednotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikednotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikednotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
