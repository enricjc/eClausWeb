import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { Clau } from './clau.model';
import { Membre } from '../membres/membre.model';

import { MembreService } from '../membres/membre.service';

@Injectable()
export class ClausService {
  clausChanged = new Subject<Clau[]>();

  constructor(private http: Http,
    private membreService: MembreService) {
    this.assignarPropietariClau(0, 0);
    this.assignarPropietariClau(1, 1);
    this.assignarPropietariClau(2, 2);
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
    params.append('nom', nom);
    params.append('descripcio', descripcio);

    if (propietari || propietari != '')
      params.append('propietari', propietari);

    var options = new RequestOptions({ headers: headers });

    return this.http.put('/api/claus/' + id, params.toString(), options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error al servidor'));

  }

  // TODO
  // Cal crear la lògica backend MEMBRE abans de modificar aquesta funcionalitat.
  assignarPropietariClau(indexClau: number, indexMembre: number) {
    return null;
    /*if ((this.getClau(indexClau) != null) && (this.membreService.getMembre(indexMembre) != null)) {
      this.getClau(indexClau).propietari = this.membreService.getMembre(indexMembre);
      this.clausChanged.next(this.claus.slice());
    }*/
  }

}
