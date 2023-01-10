import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './helpers/auth.guard';
import { AuthtwoGuard } from './helpers/authtwo.guard';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { SampleNotesComponent } from './sample-notes/sample-notes.component';
import { SampleNotesDetailsComponent } from './sample-notes-details/sample-notes-details.component';
import { LikednotesComponent } from './likednotes/likednotes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthtwoGuard],title:'Login'},
  {path:'signup',component:SignupComponent,canActivate:[AuthtwoGuard],title:'Signup'},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'view-notes',component:NotesListComponent,canActivate:[AuthGuard],title:'Saved Notes'},
  {path:'add-notes',component:AddNotesComponent,canActivate:[AuthGuard],title:'Add Notes'},
  {path:'edit-notes/:noteId',component:EditNotesComponent,canActivate:[AuthGuard],title:'Edit Notes'},
  {path:'sample-notes/:id',component:SampleNotesDetailsComponent,title:'Sample Notes'},
  {path:'sample-notes',component:SampleNotesComponent,title:'Sample Notes'},
  {path:'favourites',component:LikednotesComponent,canActivate:[AuthGuard],title:'Liked Notes'},
  {path:'note-details/:id',component:NoteDetailsComponent},
  {path:'**',component:PagenotfoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }