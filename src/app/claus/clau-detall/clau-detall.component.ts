import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ClausService } from '../claus.service';

import { Clau } from '../clau.model';

@Component({
  selector: 'app-clau-detall',
  templateUrl: './clau-detall.component.html',
  styleUrls: ['./clau-detall.component.css']
})
export class ClauDetallComponent implements OnInit, OnDestroy {
  clau: any;
  id: string;
  getClauSubscription: Subscription;

  constructor(private clausService: ClausService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
      });

    this.getClauSubscription = this.clausService.getClau(this.id)
      .subscribe(
      (clau: any) => {
        this.clau = clau;
      }
      );
  }

  ngOnDestroy() {
    if (this.getClauSubscription) {
      this.getClauSubscription.unsubscribe();
    }
  }

}
