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
const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthtwoGuard]},
  {path:'signup',component:SignupComponent,canActivate:[AuthtwoGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'view-notes',component:NotesListComponent,canActivate:[AuthGuard]},
  {path:'add-notes',component:AddNotesComponent,canActivate:[AuthGuard]},
  {path:'edit-notes/:noteId',component:EditNotesComponent,canActivate:[AuthGuard]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
