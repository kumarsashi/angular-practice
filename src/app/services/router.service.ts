import { Injectable } from '@angular/core';
import { Router, OutletContext } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToDashboard(){
    console.log("Inside navigate to dashboard");
    this.router.navigate(['dashboard']);
  }

  navigateToNotesView(){
    console.log("Inside navigate to notes view");
    this.router.navigate(['dashboard']);
  }

  routeToEditNoteView(noteId){
    console.log("value of id inside route is :"+noteId);
    this.router.navigate(['dashboard',{
       outlets:{
    noteEditOutlet:['note',noteId]
  }
    }]);
  }
}
