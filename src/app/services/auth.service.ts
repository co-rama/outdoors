import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
user = new Subject<firebase.User>();
isLoggedIn = false;
  constructor(private auth: AngularFireAuth, private route: ActivatedRoute) {
    this.auth.authState.subscribe(
      user => {
        if (user){
          this.user.next(user);
          this.isLoggedIn = true;
        }
      }
    );
  }
  login(): void{
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      .catch( error => console.error(error));
  }
  logout(): boolean{
    this.auth.signOut().then(
      success => {
        this.isLoggedIn = false;
        return true;
      }
    ).catch(
      reason => {
        console.log(reason);
        return false;
      }
    );
    return false;
  }
}
