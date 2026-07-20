import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
    Change this value to test the guard.

    true  -> Profile opens
    false -> Redirects to Home
  */

  isLoggedIn = true;

}