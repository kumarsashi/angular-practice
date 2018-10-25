import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  public title: string;
  public desc: string;

  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.title = "";
    this.desc = "";

    console.log("title is :"+ this.title+ " " +this.desc);
  }

}
