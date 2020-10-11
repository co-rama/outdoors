import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.auth.login();
  }
}
