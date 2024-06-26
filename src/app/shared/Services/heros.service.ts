/* ============================================================================
    heros.service.ts
    Heros Service holds the Heros Data
    ---------------------------------------------------------------------------
    vers    Date        Whom            What
    0.0.1   6/11/2024  Steven Stier    Initial Release

============================================================================== */
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HerosService {
 heros = [
    {id: 9, name:'Superman'},
    {id: 18, name:'Batman'},
    {id: 7, name:'BatGirl'},
    {id: 6, name:'Robin'},
    {id: 12, name:'Flash'},
    {id: 14, name:'Steve'},
    {id: 69, name:'Fred'}
  ];

  constructor() { }
 getHeros() {
    return this.heros;
  }

}
