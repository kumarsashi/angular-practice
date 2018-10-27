import { Component, OnInit } from '@angular/core';
import { Note } from './Note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
 
  public note: Note;
  public noteList: Note[];

  constructor(private noteService:NoteService) { 
    this.note = new Note;
    this.noteList=[];
  }

  ngOnInit() {
    this.noteService.getNotes().subscribe(data =>this.noteList=data, err=> console.log(err));
  }

  addNote() {
    
    this.noteList.push(this.note);
    this.noteService.addNotes(this.note).subscribe(data =>{}, err=>{});
    console.log("title is :"+ this.note.title+ " " +this.note.desc);
    this.note = new Note();
  }

}
