
/* ============================================================================
    token.service.ts
    Service gets the token from UAA
    ---------------------------------------------------------------------------
    vers    Date        Whom            What
    0.0.1   16/11/2024  Steven Stier    Initial Release

============================================================================== */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { environment } from '../../../environments/environment';
import { myLog } from '../utilities';

export class TokenServiceClass {
  access_token: string = '';
  token_type: string = '';
  id_token: string = '';
  refresh_token: string = '';
  expires_in: number = 0;
  scope: string = '';
  jti: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private httpClient:HttpClient) { }

  getoken(): Observable<TokenServiceClass> {
    // check that the enviroment settings are availiable
    let url:string  = 'https://' + environment.uaaServiceOrigin + ':' + environment.uaaServicePort  + '/uaa/oauth/token';
     myLog(('Token URL:'+ url));
    let reqBody:string = 'grant_type=password';
        reqBody += '&username=' + environment.paUser;
        reqBody += '&password=' + environment.paPW;
        reqBody += '&client_id=' + environment.uaaServiceAdminClientID;
        reqBody += '&client_secret=' + environment.uaaServiceAdminClientSecret;
        myLog(('Token req Body:'+ reqBody));
  if (!(environment.uaaServiceOrigin) || !(environment.uaaServicePort ) ||
    !(environment.paUser) || !(environment.paPW) ||
    !(environment.uaaServiceAdminClientID) || !(environment.uaaServiceAdminClientSecret))
     {
      return throwError(() => new Error('Missing uaaService Enviroment variables.'))
    };

    let headers = new HttpHeaders().append('Content-type', 'application/x-www-form-urlencoded');

    return this.httpClient
      .post<any>(url, reqBody, {headers: headers})
    }
}
