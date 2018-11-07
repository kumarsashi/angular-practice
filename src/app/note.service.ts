import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note/Note';
import { AuthorizationService } from './authorization.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private authService: AuthorizationService,private httpClient: HttpClient) { }

  getNotes():Observable<Note[]>
  {
    return this.httpClient.get<Note[]>('http://localhost:3000/api/v1/notes',
    {headers: new HttpHeaders().set('Authorization',`${this.authService.getBearerToekn()}`) });
  }

  addNotes(note:Note){
   return this.httpClient.post<Note>("http://localhost:3000/api/v1/notes",note,
   {headers: new HttpHeaders().set('Authorization',`${this.authService.getBearerToekn()}`) }
   );
  }
}
