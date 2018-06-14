import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GammaTagService {
  private url = 'http://api.journile.io/JRA/GMTag';
  headers: any;

  constructor(private http: Http) {}

  getAll() {
    return this.http.get(this.url + '/GGT').map(response  => response.json());
  }

  create(name, gammaTagUrl) {
    this.headers =  { Name: name, URL: gammaTagUrl };
    console.log(this.headers);

    return this.http.post(this.url + '/AddGammatag', { headers: this.headers })
    .map(res => res.json());
  }

  update(resource) {
    return this.http.patch(this.url + '/UpdateGammaTag', { headers: this.headers }).map(response  => response.json());
  }

  delete(id) {
    this.headers = { ID: id };
    console.log(this.headers);

    return this.http.delete(this.url + '/DeleteGammadTag', { headers: this.headers }).map(response  => response.json());
  }

}
