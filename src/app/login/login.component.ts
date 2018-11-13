import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { loginUser } from './loginUser'
import { AuthorizationService } from '../services/authorization.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUser: loginUser;
  public loginForm: FormGroup;

  @ViewChild(FormGroupDirective)
  formGroupDirective: FormGroupDirective;

  constructor(private routerService: RouterService,private authService: AuthorizationService,private formBuilder:FormBuilder) {
    this.loginUser = new loginUser();
    this.loginForm = formBuilder.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(3)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
   }

  ngOnInit() {
  }

  validateUser(loginForm){
    if(!loginForm.invalid){
    console.log(loginForm.value);

    this.loginUser = loginForm.value;
    this.authService.authenticateLoginUser(this.loginUser).subscribe(res =>{
      console.log("token is "+ res['token']);
      this.authService.setBearerToken(res['token']);
      this.routerService.navigateToDashboard();
    })
    }
    this.loginForm.reset();
    this.formGroupDirective.resetForm();

  }
}
