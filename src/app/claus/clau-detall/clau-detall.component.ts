import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { FormGroup } from '@angular/forms';

import { ClausService } from '../claus.service';

import { Clau } from '../clau.model';

@Component({
  selector: 'app-clau-detall',
  templateUrl: './clau-detall.component.html',
  styleUrls: ['./clau-detall.component.css']
})
export class ClauDetallComponent implements OnInit {
  clau: Clau;
  index:number;
  clauForm: FormGroup;

  constructor(private clausService: ClausService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) =>{
            this.index = +params['id'];
            this.clau = this.clausService.getClau(this.index);
        });

    this.clauForm = new FormGroup({

    });
  }
}
