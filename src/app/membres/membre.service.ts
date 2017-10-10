import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Membre } from './membre.model';

@Injectable()
export class MembreService {
  membresChanged = new Subject<Membre[]>();

  private membres: Membre[] = [
    new Membre(
      'Enric',
      'Jódar',
      'enric@enric.cat',
      '659656556'
    ),
    new Membre(
      'Pere',
      'Campi',
      'pere@campi.cat',
      '789656556'
    ),
    new Membre(
      'Arnau',
      'Carbu',
      'arnau@carbu.cat',
      '069656556'
    ),
    new Membre(
      'Arnau',
      'Olesti',
      'arnau@olesti.cat',
      '559656556'
    ),
    new Membre(
      'Jesús',
      'Torres',
      'jesus@torres.cat',
      '339656556',
    ),
  ];

  constructor() { }

  getMembres(){
    return this.membres.slice();
  }

  getMembre(index: number){
    return this.membres[index];
  }

  deleteMembre(index: number){
    this.membres.splice(index, 1);
    this.membresChanged.next(this.membres.slice());
  }

}
