import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private url = 'http://api.journile.io/JRA/SystemUser';
  headers: any;

  constructor(private http: Http) {}

  login(credentials) {
    console.log(credentials);
    this.headers =  { AuthToken: '', Username: credentials.username, Password: credentials.password};
    console.log(this.headers);
    return this.http.get(this.url + '/Login', { headers: this.headers }).map(response  => response.json());
  }

  getAllUsers() {
    return this.http.get(this.url + '/GetUser').map(response  => response.json());
  }

  activateDeactivateAccount(id, isActive) {
    this.headers = { RegUserID: id, Active: isActive };

    console.log(this.headers);
    return this.http.put(this.url + '/ActivateDeactivateAccount', { headers: this.headers }).map(response  => response.json());
  }

}
