import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  headers: any;
  users: any[];

  constructor(private http: Http) {

    this.http = http;

    // http.get('http://api.journile.io/JRA/SystemUser/GetUser')
    //   .subscribe(response => {
    //       this.users = response.json();
    //       // console.log(response.json());
    //   });

  }

  login(credentials) {
    console.log(credentials);
    this.headers =  { AuthToken: '', Username: credentials.username, Password: credentials.password};
    console.log(this.headers);
    return this.http.get('http://api.journile.io/JRA/SystemUser/Login', { headers: this.headers }).map(response  => response.json());
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }

}
