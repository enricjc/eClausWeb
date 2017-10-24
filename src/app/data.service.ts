import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/users')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  checkUser(email: string, password: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password); // .toString() => email=emailContent&password=passwordContent

    var options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('/api/auth/login', params.toString(), options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor')); //...errors if any
  }

  addUser(email: string, password: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password); // .toString() => email=emailContent&password=passwordContent

    var options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post('/api/users', params.toString(), options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor')); //...errors if any
  }

  // Mètode addUser versió Promise. Es substitueix per versió Observable.
  /*addUser(email: string, password: string) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password); // .toString() => email=emailContent&password=passwordContent

    return new Promise((resolve, reject) => {
      this.http.post('/api/users', params.toString(), { headers })
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }*/

}
