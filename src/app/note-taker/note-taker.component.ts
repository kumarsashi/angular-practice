import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Note } from '../note/Note';
import { NoteService } from '../services/note.service';


@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {
  public note: Note;
  public noteList: Note[];
  public noteForm: FormGroup;

    @ViewChild(FormGroupDirective)
    formGroupDirective: FormGroupDirective
  constructor(private noteService:NoteService,private formBuilder: FormBuilder) {
    this.note = new Note;
    this.noteList=[];

    this.noteForm = formBuilder.group({
      title:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      text:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
   }

  ngOnInit() {   this.noteService.getNotes().subscribe(data =>this.noteList=data, err=> console.log(err));
   }

  addNote(noteForm: FormGroup) {
    
    this.note = noteForm.value;
    //this.noteList.push(this.note);
    this.noteService.addNote(this.note).subscribe(data =>{}, err=>{});
    console.log("title is :"+ this.note.title+ " " +this.note.text);
    //this.note = new Note();

    this.noteForm.reset();
    this.formGroupDirective.resetForm();
  }

}
