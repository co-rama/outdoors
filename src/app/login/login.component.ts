import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).
      then((success) => {
        this.router.navigate(['../']).catch( error => console.error(error));
      }).
      catch(reason => {
        console.log(reason);
      });
    }
  }
