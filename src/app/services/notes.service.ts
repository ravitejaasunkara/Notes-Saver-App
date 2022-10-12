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
    return this.http.post(this.getNotesUrl+username+'.json',{title:title,body:noteDescription,isFavourite:false,dateCreated:new Date().toUTCString()}); 
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

  /**
   * 
   * @param noteId 
   * @param resBody 
   * @param username 
   * @returns an observable of type any
   * function useful in two ways
   * one way for edit-notes and update
   * and another way is to like and unlike the note
   */
  updateNote(noteId:any,resBody:any,username:any){
    let url = `${this.getNotesUrl}${username}/${noteId}.json`;
    return this.http.put(url,resBody);
  }
}
