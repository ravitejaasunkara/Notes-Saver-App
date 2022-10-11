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

  constructor(private http: HttpClient,private notesService:NotesService,private authService:AuthService) { }
  notesData: any = [];
  colorsList = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'];
  resData:any = [];
  reverseData:any = [];
  ngOnInit(): void {
    this.getNotes();
  }


  getNotes(){
    var username = this.authService.getUserName();
    this.notesService.getNotes(username).subscribe(
      res => {
        var notes:any = res;
        for(const key in notes){
          let color = Math.floor(Math.random()*10);
          this.notesData.push({...notes[key],id:key,color:this.colorsList[color]});
        }
        for(let i = this.notesData.length-1;i >= 0;i--){
          //console.log(this.notesData[i]);
          this.reverseData.push(this.notesData[i]);
        }
        //console.log(this.reverseData);
      }
    )
  }
  /**
   * It takes in the event, note title, note body, and note id, and then it sets the color of the icon
   * to red if it's black, and black if it's red.
   * @param {any} event - The event that is triggered when the user clicks on the icon.
   * @param {any} noteTitle - Title of the note
   * @param {any} noteBody - The body of the note
   * @param {any} noteid - the id of the note
   * the main aim of this function is to make a note favourite and non-favourite among the list of notes
   */
  setLikes(event:any,noteTitle:any,noteBody:any,noteid:any){
    var username = this.authService.getUserName();
    let iconColor = event.target.style.color;
    var newColor;
    var isFav;
    if(iconColor == 'black'){
      event.target.style.color = 'red';
      newColor = 'red';
      isFav = true;
    }else{
      event.target.style.color = 'black';
      newColor = 'black';
      isFav = false;
    }
    let resBody = {
      title:noteTitle,
      body:noteBody,
      isFavourite:isFav
    }
    this.notesService.updateNote(noteid,resBody,username).subscribe(res => {
      //console.log(res)
      this.notesData = [];
      this.reverseData = [];
      this.getNotes();
    },err => {
      console.log(err)
    })
  }

}
