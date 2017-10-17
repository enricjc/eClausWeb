import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Clau } from '../clau.model';
import { ClausService } from '../claus.service';

@Component({
  selector: 'app-clau-list',
  templateUrl: './clau-list.component.html',
  styleUrls: ['./clau-list.component.css']
})
export class ClauListComponent implements OnInit {
  claus: Clau[]
  subscription: Subscription;

  constructor(private clausService: ClausService) { }

  ngOnInit() {
    this.subscription = this.clausService.clausChanged
      .subscribe(
        (claus: Clau[]) => {
            this.claus = claus;
        }
    );
    this.claus = this.clausService.getClaus();
  }

}
