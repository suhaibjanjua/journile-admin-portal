import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  headers: any;

  constructor(private http: Http) {
    this.http = http;
  }

  login(credentials) {
    console.log(credentials);
    this.headers =  { AuthToken: '', Username: credentials.username, Password: credentials.password};
    console.log(this.headers);
    return this.http.get('http://api.journile.io/JRA/SystemUser/Login', { headers: this.headers }).map(response  => response.json());
  }

  getAllUsers() {
    return this.http.get('http://api.journile.io/JRA/SystemUser/GetUser').map(response  => response.json());
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }

  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //     return Observable.throw(new BadInput(error.json));
  //   }

  // }

}
