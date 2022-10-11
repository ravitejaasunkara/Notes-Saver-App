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

  saveNote(title:any,noteDescription:any,username:any){
    return this.http.post(this.getNotesUrl+username+'.json',{title:title,body:noteDescription,dateCreated:new Date().toLocaleDateString()}); 
  }

  getNotes(username:any){
    return this.http.get(this.getNotesUrl+username+'.json');
  }

  deleteNote(noteId:any,username:any){
    let url = `${this.getNotesUrl}${username}/${noteId}.json`;
    return this.http.delete(url);
  }

  getNoteByNoteId(noteId:any,username:any){
    let url = `${this.getNotesUrl}${username}/${noteId}.json`;
    return this.http.get(url);
  }
  updateNote(noteId:any,resBody:any,username:any){
    let url = `${this.getNotesUrl}${username}/${noteId}.json`;
    return this.http.put(url,resBody);
  }
}
