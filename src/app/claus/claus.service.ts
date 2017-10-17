import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Clau } from './clau.model';
import { Membre } from '../membres/membre.model';

import { MembreService } from '../membres/membre.service';

@Injectable()
export class ClausService {
  clausChanged = new Subject<Clau[]>();

  private claus: Clau[] = [
    new Clau(
      'a78xAs',
      'Claus vermelles',
      'Claus amb una cinta vermella',
      null
    ),
    new Clau(
      'b78xAs',
      'Claus liles',
      'Claus amb una cinta lila',
      null
    ),
    new Clau(
      'c78xAs',
      'Claus originals',
      'Claus velles',
      null
    )
  ];

  constructor(private membreService: MembreService) {
    this.assignarPropietariClau(0, 0);
    this.assignarPropietariClau(1, 1);
    this.assignarPropietariClau(2, 2);
  }

  getClaus() {
    return this.claus.slice();
  }

  getClau(index: number) {
    return this.claus[index];
  }

  assignarPropietariClau(indexClau: number, indexMembre: number) {
    if ((this.getClau(indexClau) != null) && (this.membreService.getMembre(indexMembre) != null)) {
      this.getClau(indexClau).propietari = this.membreService.getMembre(indexMembre);
      this.clausChanged.next(this.claus.slice());
    }
  }

}
