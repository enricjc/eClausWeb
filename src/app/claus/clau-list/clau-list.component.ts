import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Clau } from '../clau.model';
import { ClausService } from '../claus.service';

@Component({
  selector: 'app-clau-list',
  templateUrl: './clau-list.component.html',
  styleUrls: ['./clau-list.component.css']
})
export class ClauListComponent implements OnInit, OnDestroy {
  claus: any[]
  subscription: Subscription;
  clausSubs: Subscription;

  constructor(private clausService: ClausService) { }

  ngOnInit() {
    // TODO
    // Cal crear la lògica backend MEMBRE abans de modificar aquesta funcionalitat.
    /*this.subscription = this.clausService.clausChanged
      .subscribe(
        (claus: Clau[]) => {
            this.claus = claus;
        }
    );*/
    this.clausSubs = this.clausService.getClaus()
      .subscribe(
        (claus: any) => {
            this.claus = claus;
        }
    );
  }

  ngOnDestroy() {
    if (this.clausSubs) {
      this.clausSubs.unsubscribe();
    }
  }

}
