import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-item',
  templateUrl: './membre-item.component.html',
  styleUrls: ['./membre-item.component.css']
})
export class MembreItemComponent implements OnInit, OnDestroy {
  membre: any;
  @Input() sid: string;
  getMembreSubscription: Subscription;

  constructor(private membreService: MembreService) { }

  ngOnInit() {
    this.getMembreSubscription = this.membreService.getMembre(this.sid)
      .subscribe(
        (membre: any) => {
            this.membre = membre;
        }
    );
  }

  ngOnDestroy() {
  /*  if (this.getMembreSubscription) {
      this.getMembreSubscription.unsubscribe();
    }*/
  }

}
