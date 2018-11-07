import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../authorization.service';
import { RouterService } from '../router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  public bearerToken: string;
  public isAuthenticated: boolean;
  constructor(private routerService: RouterService,private authService : AuthorizationService){
    this.bearerToken = authService.getBearerToekn();
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authService.isUserAuthenticated(this.bearerToken).subscribe(
        res=> {
          console.log(res['isAuthenticated']);
          this.isAuthenticated = res['isAuthenticated'];

          if(this.isAuthenticated){
            this.routerService.navigateToNotes();
          }
          else{
            this.routerService.navigateToLogin();
          }
        }
      )
    return this.isAuthenticated;
  }
}
