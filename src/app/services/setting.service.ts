import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SettingService {
  headers: any;

  constructor(private http: Http) {
    this.http = http;
  }

  UpdatePassword(resources) {
    console.log(resources);
    this.headers =  { Password: resources.confirmPassword };
    console.log(this.headers);
    return this.http.post('http://api.journile.io/JRA/SystemUser/ChangePassword', { headers: this.headers })
    .map(response  => response.json());
  }

}

