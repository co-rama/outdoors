import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: firebase.User;
  isAuthenticated = false;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe(
      user => {
        if (user){
          this.user = user;
          this.isAuthenticated = true;
        }
      }
    );
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.signOut().then(
      success => {
        this.isAuthenticated = false;
      }
    ).catch(
      reason => {
        console.log(reason);
      }
    );
  }
}
