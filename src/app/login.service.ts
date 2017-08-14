import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(public http: Http) {

  }

  login(user: { user: string, password: string }) {
    return this.http.post('http://localhost:3000/login', user);
  }

}
