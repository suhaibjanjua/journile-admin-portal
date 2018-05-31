import { AuthenticationService } from '../authentication.service';
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
    private authenticationService: AuthenticationService) { }

  signIn(credentials) {
      // this.authenticationService.login(credentials)
      // .subscribe(result => {
      //   if (result) {
      //     this.router.navigate(['/']);
      //   } else {
      //     this.invalidLogin = true;
      //   }
      // });

      console.log(credentials);
      this.ngZone.run( () => {
        this.router.navigate(['/users']);
      });
  }
}
