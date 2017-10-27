import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Membre } from '../membre.model';

import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-detall',
  templateUrl: './membre-detall.component.html',
  styleUrls: ['./membre-detall.component.css']
})
export class MembreDetallComponent implements OnInit {
  membre: any;
  id: string;
  getMembreSubscription: Subscription;

  constructor(private membreService: MembreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
      });

    this.getMembreSubscription = this.membreService.getMembre(this.id)
      .subscribe(
      (membre: any) => {
        this.membre = membre;
      });
  }

}
