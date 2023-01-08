import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private notesService:NotesService,private authService:AuthService) { }
  currentId!:any;
  noteTitle!:any;
  noteBody!:any;
  ngOnInit(): void {
    this.getId();
    this.getNoteDetailsByNoteId();
  }

  getId(){
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentId = params.get('id');      
    })
    //console.log(this.currentId);
  }

  getNoteDetailsByNoteId(){
    this.notesService.getNoteByNoteId(this.currentId).subscribe(
      (res:any) => {
        var data = res.result[0];
        this.noteTitle = data?.title;
        this.noteBody =data?.description;
      },(err:any) => {
        console.log(err);
      }
    )
  }

}
