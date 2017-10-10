import { Component, OnInit, Input } from '@angular/core';

import { Clau } from '../../clau.model';

@Component({
  selector: 'app-clau-item',
  templateUrl: './clau-item.component.html',
  styleUrls: ['./clau-item.component.css']
})
export class ClauItemComponent implements OnInit {
  @Input() clau: Clau;
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

}
