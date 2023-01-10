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
  currTitle!:string;
  currDescription!:string;
  currId!:string;
  ngOnInit(): void {
    this.getFavouriteNotes();
  }

  /**
   * This function is used to get the favourite notes of the user
   * getting all the saved notes and filtering the notes based on isFavourite is true or false
   */
  getFavouriteNotes() {
    const userid = localStorage.getItem('userId');
    this.notesService.getFavNotes(userid).subscribe(
      (res: any) => {
        var likenotes:any = res.result;
        for(const key in likenotes){
          let date = new Date(likenotes[key].updatedAt).toLocaleString();
          let color = Math.floor(Math.random()*10);
          this.favnotes.push({...likenotes[key],id:key,color:this.colorsList[color],noteDate:date});
        }
      })
      // console.log(this.likedNotes);
  }

  setLikes(favType:any,noteid:any){
    var username = this.authService.getUserName();
    if (favType == 'unlike') {
      let resBody = {isFav: false};
      this.notesService.updateNote(noteid, resBody).subscribe(res => {
        this.favnotes = [];
        this.likedNotes = [];
        this.getFavouriteNotes();
      }, err => {
        console.log(err)
      })
    } else if (favType == 'like') {
      let resBody = {isFav: true}
      this.notesService.updateNote(noteid, resBody).subscribe(res => {
        this.favnotes = [];
        this.likedNotes = [];
        this.getFavouriteNotes();
      }, err => {
        console.log(err)
      })
    }
  }

  currData(title:any,description:string,id:string){
    this.currTitle = title;
    this.currDescription = description;
    this.currId = id;
  }

}
