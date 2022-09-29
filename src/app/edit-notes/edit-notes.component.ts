import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private notesService: NotesService,private authService:AuthService) { }

  posts: any = []

  noteId!: any;
  @ViewChild('editNotesTextArea', { static: true }) editNotesTextArea!: ElementRef;
  @ViewChild('titleInput', { static: true }) titleInput!: ElementRef;
  currentPostData!: any;
  saved: boolean = false;
  cancelled: boolean = false;
  deleted: boolean = false;
  updated: boolean = false;

  ngOnInit(): void {
    this.getNoteId();
    this.loadDataIntoTextarea();
  }
 
  cancelNote() {
    this.cancelled = true;
    setTimeout(() => {
      this.cancelled = false;
      this.router.navigate(['/view-notes']);
    }, 2000);
  }
  getNoteId() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.noteId = paramMap.get('noteId');
      //console.log(this.noteId)
    })
  }
  loadDataIntoTextarea() {
    var username = this.authService.getUserName();
    this.notesService.getNoteByNoteId(this.noteId,username).subscribe(res => {
      // this.posts = res;
      console.log(res);
      var data: any = res;
      this.editNotesTextArea.nativeElement.value = data?.body;
      this.titleInput.nativeElement.value = data?.title;
    })
  }

  deleteNote() {
    var username = this.authService.getUserName();
    if (window.confirm('Are you sure you want to delete this note ?')) {
      this.notesService.deleteNote(this.noteId,username).subscribe(res => {
        console.log(res);
        this.deleted = true;
        setTimeout(() => {
          this.deleted = false;
          this.router.navigate(['/view-notes']);
        }, 2000);
      }, err => {
        console.log(err);
      })
    }
  }

  updateNote() {
    var username = this.authService.getUserName();
    if (window.confirm('Are you sure you want to update this note ?')) {
      let resBody = {
        title: this.titleInput.nativeElement.value,
        body: this.editNotesTextArea.nativeElement.value
      }
      this.notesService.updateNote(this.noteId, resBody,username).subscribe(res => {
        this.updated = true;
        setTimeout(() => {
          this.updated = false;
          this.router.navigate(['/view-notes'])
        }, 2000)
      })
    }
  }
}
