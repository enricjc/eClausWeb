import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Membre } from './membre.model';

@Injectable()
export class MembreService {

  private membres: Membre[] = [];

  constructor(private http: Http) { }

  getMembres(): Observable<any> {
    return this.http.get('/api/membres')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));
  }

  getMembre(id: string): Observable<any> {
    return this.http.get('/api/membres/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));
  }

  insertMembre(nom: string, cognoms: string, telefon: string, email: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('nom', nom);
    params.append('cognoms', cognoms);
    params.append('telefon', telefon);
    params.append('email', email);

    var options = new RequestOptions({ headers: headers });

    return this.http.post('/api/membres/', params.toString(), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));

  }

  updateMembre(id: string, nom: string, cognoms: string, telefon: string, email: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('nom', nom);
    params.append('cognoms', cognoms);
    params.append('telefon', telefon);
    params.append('email', email);

    var options = new RequestOptions({ headers: headers });

    return this.http.put('/api/membres/' + id, params.toString(), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));

  }

  deleteMembre(id: string): Observable<any> {
    return this.http.delete('/api/membres/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));
  }

}
