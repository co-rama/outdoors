import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {AuthenticationService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: firebase.User;
  isAuthenticated = false;

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.auth.user.subscribe(
      user => {
        this.user = user;
        this.isAuthenticated = true;
      }
    );
  }

  logout(): void {
  this.isAuthenticated = this.auth.logout();
  }
}
