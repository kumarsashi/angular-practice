import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from '../note/Note';
import { AuthorizationService } from './authorization.service';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[];
  notesSubject: BehaviorSubject<Note[]>;

  constructor(private authService: AuthorizationService,private httpClient: HttpClient) { 
    this.notes=[];
    this.notesSubject= new BehaviorSubject([]);
    this.fetchNotesFromServer();
  }

  fetchNotesFromServer()
  {
    this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',
    {headers: new HttpHeaders().set('Authorization',`Bearer ${this.authService.getBearerToekn()}`) }
  ).subscribe(notes =>{
      this.notes = notes;
      this.notesSubject.next(this.notes);

    })
 
}

  getNotes():Observable<Note[]>
  {
    return this.notesSubject;
  }

  addNote(note: Note){
    console.log("Inside add note method :: "+this.authService.getBearerToekn());
   return this.httpClient.post<Note>('http://localhost:3000/api/v1/notes',note,
    {headers: new HttpHeaders().set('Authorization',`Bearer ${this.authService.getBearerToekn()}`) }
  ).pipe(tap(addnote =>
    {
      this.notes.push(addnote);
      this.notesSubject.next(this.notes);
    }))
  
  }

  getNoteById(noteId:number): Note{
    console.log("id is "+ noteId);
    let foundNote= this.notes.find(note => note.id == noteId);
    console.log("Found note is ::"+ foundNote.id+ foundNote.text+ foundNote.title);
    return foundNote;

  }

  editSaveNote(note: Note){
    console.log("Inside add note method :: "+this.authService.getBearerToekn());
    return this.httpClient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`,note,
     {headers: new HttpHeaders().set('Authorization',`Bearer ${this.authService.getBearerToekn()}`) }
   ).pipe(tap(editNote =>
     {
       const note = this.notes.find(note => note.id == editNote.id);
       Object.assign(note,editNote);
       this.notesSubject.next(this.notes);
     }))

  }

   
}
