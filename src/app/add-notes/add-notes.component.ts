import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  @ViewChild('textboxArea', { static: true }) textboxArea!: ElementRef;
  @ViewChild('titleInput', { static: true }) titleInput!: ElementRef;

  ngOnInit(): void {

  }
  saved: boolean = false;
  constructor(private notesService: NotesService, private router: Router,private authService:AuthService) { }
  addNotesForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    noteDescription: new FormControl('', [Validators.required])
  })
  get f() {
    return this.addNotesForm.controls;
  }
  addNote() {
    const { title, noteDescription } = this.addNotesForm.value;
    var userId = localStorage.getItem('userId');
    this.notesService.saveNote(title, noteDescription,userId).subscribe(res => {
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
        this.router.navigate(['/view-notes']);
      }, 2000);
    }, err => {
      console.log(err);
    }
    );
  }
}