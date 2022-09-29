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
  // posts: any[] = [
  //   // {
  //   //   "userId": 1,
  //   //   "id": 1,
  //   //   "title": "sunt aut facere ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 2,
  //   //   "title": "qui est esse",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 3,
  //   //   "title": "ea molestias quasi ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 4,
  //   //   "title": "eum et est ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 5,
  //   //   "title": "nesciunt quas odio",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 1,
  //   //   "title": "sunt aut facere ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 2,
  //   //   "title": "qui est esse",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 1,
  //   //   "title": "sunt aut facere ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 2,
  //   //   "title": "qui est esse",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 1,
  //   //   "title": "sunt aut facere ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 2,
  //   //   "title": "qui est esse",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 1,
  //   //   "title": "sunt aut facere ",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // },
  //   // {
  //   //   "userId": 1,
  //   //   "id": 2,
  //   //   "title": "qui est esse",
  //   //   "body": "dsjghjgfhsjdfk kdfjhgjkfjghrfg eveniet architecto"
  //   // }
    
    
  // ]

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
