import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Subscription } from 'rxjs/Subscription';

import { Clau } from './clau.model';
import { Membre } from '../membres/membre.model';

import { MembreService } from '../membres/membre.service';

@Injectable()
export class ClausService {
  clausChanged = new Subject<any[]>();
  updPropietariSubscription: Subscription;

  constructor(private http: Http,
    private membreService: MembreService) {
  }

  getClaus(): Observable<any> {
    return this.http.get('/api/claus')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));
  }

  getClau(id: string): Observable<any> {
    return this.http.get('/api/claus/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));

  }

  updateClau(id: string, nom: string, descripcio: string, propietari: string): Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    var params = new URLSearchParams();
    params.append('id', id);

    if (nom) {
      params.append('nom', nom);
    }

    if (descripcio) {
      params.append('descripcio', descripcio);
    }

    if (propietari) {
      params.append('propietari', propietari);
    }

    var options = new RequestOptions({ headers: headers });

    return this.http.put('/api/claus/' + id, params.toString(), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));

  }

  // TODO
  // Cal crear la lògica backend MEMBRE abans de modificar aquesta funcionalitat.
  assignarPropietariClau(idClau: string, idMembre: string) {
    this.updPropietariSubscription = this.updateClau(idClau, null, null, idMembre).subscribe(
    (data: any) => {
      console.log(data)
    },
    error => console.log(error)
    );
    //this.clausChanged.next(this.claus.slice());
  }

}
