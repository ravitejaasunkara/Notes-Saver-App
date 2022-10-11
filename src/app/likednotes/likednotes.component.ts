import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-likednotes',
  templateUrl: './likednotes.component.html',
  styleUrls: ['./likednotes.component.css']
})
export class LikednotesComponent implements OnInit {

  constructor(private authService: AuthService, private notesService: NotesService) { }
  likedNotes: any = [];
  favnotes:any = [];
  colorsList = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'];
  ngOnInit(): void {
    this.getFavouriteNotes();
  }

  /**
   * This function is used to get the favourite notes of the user
   * getting all the saved notes and filtering the notes based on isFavourite is true or false
   */
  getFavouriteNotes() {
    var username = this.authService.getUserName();
    this.notesService.getNotes(username).subscribe(
      (res: any) => {
        var likenotes:any = res;
        for(const key in likenotes){
          let color = Math.floor(Math.random()*10);
          this.favnotes.push({...likenotes[key],id:key,color:this.colorsList[color]});
        }
        for(let i = 0;i < this.favnotes.length;i++){
          if(this.favnotes[i].isFavourite == true){
            //console.log(this.favnotes[i])
            this.likedNotes.push(this.favnotes[i]);
          }
        }
      })
      // console.log(this.likedNotes);
  }

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
      this.favnotes = [];
      this.likedNotes = [];
      this.getFavouriteNotes();
    },err => {
      console.log(err)
    })
  }

}
