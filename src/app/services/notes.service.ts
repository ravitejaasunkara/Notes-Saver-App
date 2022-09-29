import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  

  currentUserName = this.authService.getUserName();

  getNotesUrl = 'https://keep-your-noteshere-default-rtdb.firebaseio.com/';

  baseUrl = `https://keep-your-noteshere-default-rtdb.firebaseio.com/${this.currentUserName}.json`;

  saveNote(title:any,noteDescription:any){
    return this.http.post(this.baseUrl,{title:title,body:noteDescription}); 
  }

  getNotes(username:any){
    return this.http.get(this.getNotesUrl+username+'.json');
  }

  deleteNote(noteId:any){
    let url = `${this.getNotesUrl}${this.currentUserName}/${noteId}.json`;
    return this.http.delete(url);
  }

  getNoteByNoteId(noteId:any){
    let url = `${this.getNotesUrl}${this.currentUserName}/${noteId}.json`;
    return this.http.get(url);
  }
  updateNote(noteId:any,resBody:any){
    let url = `${this.getNotesUrl}${this.currentUserName}/${noteId}.json`;
    return this.http.put(url,resBody);
  }
}
