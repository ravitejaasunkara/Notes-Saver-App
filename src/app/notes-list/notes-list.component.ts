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
  colorsList = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','c10'];
  resData:any = [];
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
        for(let i = this.notesData.length-1; i >=0;i--){
          this.resData.push(this.notesData[i]);
        }
        //console.log(this.resData);
      }
    )
  }

}
