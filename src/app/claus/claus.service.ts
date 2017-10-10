import { Injectable } from '@angular/core';

import { Clau } from './clau.model';

@Injectable()
export class ClausService {
  private claus: Clau[] = [
    new Clau(
      'a78xAs',
      'Claus vermelles',
      'Claus amb una cinta vermella'
    ),
    new Clau(
      'b78xAs',
      'Claus liles',
      'Claus amb una cinta lila'
    ),
    new Clau(
      'c78xAs',
      'Claus originals',
      'Claus velles'
    )
  ];

  constructor() { }

  getClaus(){
    return this.claus.slice();
  }

  getClau(index: number){
    return this.claus[index];
  }

}
