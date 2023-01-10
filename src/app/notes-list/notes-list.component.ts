import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LikednotesComponent } from '../likednotes/likednotes.component';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  constructor(private http: HttpClient, private notesService: NotesService, private authService: AuthService) { }
  notesData: any = [];
  colorsList = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];
  resData: any = [];
  reverseData: any = [];
  favnotes:number = 0;
  ngOnInit(): void {
    this.getNotes();
  }


  getNotes() {
    this.notesService.getNotes().subscribe(
      (res:any) => {
        var notes: any = res.result;
        for (const key in notes) {
          let date = new Date(notes[key].updatedAt).toLocaleString();                
          //pushing color as an key:value into the notes array
          let color = Math.floor(Math.random() * 10);
          this.notesData.push({ ...notes[key], id: key, color: this.colorsList[color],noteDate:date });
        }
        //reversing the notes data to display the recent created notes first
        for (let i = this.notesData.length - 1; i >= 0; i--) {
          this.reverseData.push(this.notesData[i]);
          if(this.notesData[i].isFav == true){
            this.favnotes += 1;
          }
        }
      }
    )
  }
  setLikes(favType: any, noteid: any) {
    
    if (favType == 'unlike') {
      let resBody = {isFav: false};
      this.notesService.updateNote(noteid,resBody).subscribe(res => {
        this.notesData = [];
        this.reverseData = [];
        this.favnotes = 0;
        this.getNotes();
      }, err => {
        console.log(err)
      })
    } else if (favType == 'like') {
      let resBody = {isFav: true}
      this.notesService.updateNote(noteid,resBody).subscribe(res => {
        this.notesData = [];
        this.reverseData = [];
        this.favnotes = 0;
        this.getNotes();
      }, err => {
        console.log(err)
      })
    }
  }

}
