import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private http: HttpClient,private notesService:NotesService,private authService:AuthService) { }
  notesData: any = [];
  ngOnInit(): void {
    this.getNotes();
  }


  getNotes(){
    var username = this.authService.getUserName();
    this.notesService.getNotes(username).subscribe(
      res => {
        var notes:any = res;
        for(const key in notes){
          this.notesData.push({...notes[key],id:key})
        }
        //console.log(this.notesData);
      }
    )
  }

}
