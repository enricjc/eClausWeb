import { Component, OnInit } from '@angular/core';

import { Clau } from '../clau.model';
import { ClausService } from '../claus.service';

@Component({
  selector: 'app-clau-list',
  templateUrl: './clau-list.component.html',
  styleUrls: ['./clau-list.component.css']
})
export class ClauListComponent implements OnInit {
  claus: Clau[]
  constructor(private clausService: ClausService) { }

  ngOnInit() {
    this.claus = this.clausService.getClaus();
    console.log(this.claus);
  }

}
