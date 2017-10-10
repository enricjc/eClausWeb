import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Membre } from '../membre.model';

import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-detall',
  templateUrl: './membre-detall.component.html',
  styleUrls: ['./membre-detall.component.css']
})
export class MembreDetallComponent implements OnInit {
  membre: Membre;
  index:number;

  constructor(private membreService: MembreService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) =>{
            this.index = +params['id'];
            this.membre = this.membreService.getMembre(this.index);
        });
    }
}
