import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelService {
  headers: any;

  constructor(private http: Http) {
    this.http = http;
  }

  getAll() {
    return this.http.get('http://api.journile.io/JRA/Ch/GC').map(response  => response.json());
  }

  create(resource) {
    this.headers =  { AuthToken: '', Username: resource.username, Password: resource.password };
    return this.http.post('http://api.journile.io/JRA/Ch/AddChannel', { headers: this.headers }).map(response  => response.json());
      // .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch('http://api.journile.io/JRA/Ch/UpdateChannel', { headers: this.headers }).map(response  => response.json());
      // .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete('http://api.journile.io/JRA/Ch/DeleteChannel', { headers: this.headers }).map(response  => response.json());
      // .catch(this.handleError);
  }

  // private handleError(error: Response) {
  //   if (error.status === 400)
  //     return Observable.throw(new BadInput(error.json()));

  //   if (error.status === 404)
  //     return Observable.throw(new NotFoundError());

  //   return Observable.throw(new AppError(error));
  // }
}
