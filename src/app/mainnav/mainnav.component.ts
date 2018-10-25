import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css'],
})
export class MainnavComponent {

  public applicationTitle: string;
  public username: string;



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.applicationTitle = "Keep Note !!!";
    this.username = "Stackroute";
  }

  updateUserName(abc){
    this.username = abc.target.value;
  }

}
