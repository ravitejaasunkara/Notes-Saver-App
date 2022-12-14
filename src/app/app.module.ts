import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { EditNotesComponent } from './edit-notes/edit-notes.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthGuard } from './helpers/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { SampleNotesComponent } from './sample-notes/sample-notes.component';
import { SampleNotesDetailsComponent } from './sample-notes-details/sample-notes-details.component';
import { NgHttpLoaderComponent, NgHttpLoaderModule } from 'ng-http-loader';
import { LikednotesComponent } from './likednotes/likednotes.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddNotesComponent,
    NotesListComponent,
    EditNotesComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    FooterComponent,
    SampleNotesComponent,
    SampleNotesDetailsComponent,
    LikednotesComponent,
    NoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgHttpLoaderModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
