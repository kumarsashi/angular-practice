import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  navigateToNotes(){
    console.log("Inside navigate to notes");
    this.router.navigate(['note']);
  }
}
