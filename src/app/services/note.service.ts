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
    this.notes= [] ;
    this.notesSubject= new BehaviorSubject([]);
  }

  fetchNotesFromServer()
  {
    this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',
    {headers: new HttpHeaders().set('Authorization',`${this.authService.getBearerToekn()}`) }).subscribe(notes =>{
      this.notes = notes;
      this.notesSubject.next(this.notes);
    })
 
}

  getNotes():Observable<Note[]>
  {
    return this.notesSubject;
  }

  addNote(note: Note){
   return this.httpClient.post<Note[]>('http://localhost:3000/api/v1/notes',
    {headers: new HttpHeaders().set('Authorization',`${this.authService.getBearerToekn()}`) 
  }).pipe(tap(addnote =>{
    console.log(addnote);
    this.notes.push(addnote);
    this.notesSubject.next(this.notes);
  }))
  }
}
