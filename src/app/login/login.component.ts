import { Component, OnInit } from '@angular/core';
import { TokenService, TokenServiceClass } from '../shared/Services/token.service';
import { myLog } from '../shared/utilities';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  errorMsg: string = '';
  token:string = '';
  expiresIn:number=0;

  constructor(private tokenService:TokenService){}

  ngOnInit(): void {
    this.checkToken();
  }


checkToken()  {
  let tokenServiceClass:TokenServiceClass;
  myLog(`Checking Token`);

this.tokenService.getoken()
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

