import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private userService: UserService) { }

  signIn(credentials) {
      this.userService.login(credentials)
      .subscribe(response => {
        console.log(response);
        if (response.responseCode === 200) {
          this.router.navigate(['/users']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}
