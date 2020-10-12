import { Component } from '@angular/core';
import {AuthenticationService} from './services/auth.service';
import {Router} from '@angular/router';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthenticationService, router: Router, private userService: UserService) {
    // this.authService.user.subscribe(
    //   user => {
    //     if (user){
    //       this.userService.saveUser(user);
    //       router.navigate([localStorage.getItem('returnUrl')]);
    //     }
    //   }
    // );
  }
}
