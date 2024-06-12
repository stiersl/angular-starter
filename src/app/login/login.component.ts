import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService, TokenServiceClass } from '../shared/Services/token.service';
import { myLog } from '../shared/utilities';
import {FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  errorMsg: string = '';
  token:string = '';
  _username:string = '';
  _password:string = '';
  expiresIn:number=0;

constructor(private tokenService:TokenService){}

  // create an object here which will point the form controls (i.e. inputs)
  myForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
  });

  get username() {
    return this.myForm.get('username')
  }
  get password() {
    return this.myForm.get('password')
  }
    // call the server to see if this username and login are valid.
    // then set a error on the form if it isnt
  login(){
    console.log('Username='+ this.username );
    console.log('Password='+ this.password );
    this.checkToken();
  }


checkToken()  {
  let tokenServiceClass:TokenServiceClass;
  myLog(`Checking Token`);
  
 
this.tokenService.getoken(this.myForm.get('username')?.value!,this.myForm.get('password')?.value! )
.subscribe({
  next: (response) => {
    tokenServiceClass = response;
    myLog(`checkToken response received.`);

    if (tokenServiceClass.access_token){
      this.token = tokenServiceClass.access_token;
      this.expiresIn=tokenServiceClass.expires_in;

      myLog(`checkToken success: Token found.`);
      myLog(` Token=` + this.token);
      myLog(`ExpiresIn=` + this.expiresIn);
    }
    else {
      this.errorMsg = 'checkToken error:  - No token found!'
      console.error(this.errorMsg);
    }
  },
  error: (error) => {
    // this is the error from the service. Set ErrorMessage for page.
    this.errorMsg = 'checkToken: ' + error +"; Please contact your administrator.";
    console.error(this.errorMsg);
  },
  complete: () => {
    myLog(`checkToken complete:`);
  }
})
}

}

