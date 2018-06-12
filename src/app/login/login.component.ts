import { UserService } from './../services/user.service';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private userService: UserService) { }

  signIn(credentials) {
      this.userService.login(credentials)
      .subscribe(response => {
        console.log(response);
        if (response.responseCode === 200) {
          console.log('if 200');
          this.router.navigate(['/users']);
        } else {
          console.log('if not');
          this.invalidLogin = true;
        }
      });

      // console.log(credentials);
      // this.ngZone.run( () => {
      //   this.router.navigate(['/users']);
      // });
  }
}
