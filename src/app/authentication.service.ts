import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  validate(user, callback) {

    // TODO: Change it with a rest api later
    callback(true);
  }

}
