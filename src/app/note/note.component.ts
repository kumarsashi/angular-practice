import { Component, OnInit, Input } from '@angular/core';
import { Note } from './Note';
import { NoteService } from '../services/note.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
 
 @Input()
 note:Note;

 
 
  
  constructor(private routerService: RouterService,private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    
  }

    openEditNoteView(){
      this.routerService.routeToEditNoteView(this.note.id);
    }
  
}
