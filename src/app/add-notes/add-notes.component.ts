import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private notesService: NotesService, private router: Router) { }
  addNotesForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    noteDescription: new FormControl('', [Validators.required])
  })
  get f() {
    return this.addNotesForm.controls;
  }
  addNote() {
    const { title, noteDescription } = this.addNotesForm.value;
    this.notesService.saveNote(title, noteDescription).subscribe(res => {
      //console.log(res);
      this.saved = true;
      // this.titleInput.nativeElement.value = '';
      // this.textboxArea.nativeElement.value = '';
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
