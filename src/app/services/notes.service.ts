import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { notesUrl } from 'src/global';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient,private authService:AuthService) { }
  

  currentUserName = this.authService.getUserName();

  userID = localStorage.getItem('userId');
  getNotesUrl = '';

  saveNote(title:any,noteDescription:any,IdOfUser:any){
    return this.http.post(notesUrl+'/createNote',{title:title,description:noteDescription,userId:IdOfUser}); 
  }

  getNotes(){
    return this.http.get(notesUrl+'/notes/user/'+this.userID);
  }

  deleteNote(noteId:any){
    let url = notesUrl+'/notes/'+noteId;
    return this.http.delete(url);
  }

  getNoteByNoteId(noteId:any){
    return this.http.get(notesUrl+'/notes/'+noteId);
  }

  getFavNotes(userid:any){
    return this.http.get(notesUrl+'/favnotes/'+userid);
  }

  updateNote(noteId:any,resBody:any){
    return this.http.patch(notesUrl+'/notes/'+noteId,resBody);
  }
}
