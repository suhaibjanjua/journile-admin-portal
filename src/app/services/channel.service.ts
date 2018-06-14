import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelService {
  private url = 'http://api.journile.io/JRA/Ch';
  headers: any;

  constructor(private http: Http) {}

  getAll() {
    return this.http.get(this.url + '/GC').map(response  => response.json());
  }

  create(formData, name, channelUrl, logoFile) {
    this.headers =  { Name: name, URL: channelUrl };

    console.log(this.headers);

    return this.http.post(this.url + '/AddChannel', formData, { headers: this.headers })
    .map(res => res.json());
      // .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/UpdateChannel', { headers: this.headers }).map(response  => response.json());
      // .catch(this.handleError);
  }

  delete(id) {
    this.headers = { ID: id };

    console.log(this.headers);
    return this.http.delete(this.url + '/DeleteChannel', { headers: this.headers }).map(response  => response.json());
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
