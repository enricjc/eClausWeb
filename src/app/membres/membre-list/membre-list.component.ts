import { Component, OnInit,OnDestroy } from '@angular/core';
import { Membre } from '../membre.model';
import { Subscription } from 'rxjs/Subscription';

import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit, OnDestroy {
  membres: Membre[];
  subscription: Subscription;

  constructor(private membreService: MembreService) { }

  ngOnInit() {
    this.subscription = this.membreService.membresChanged
    .subscribe(
      (membres: Membre[])=>{
        this.membres = membres;
      }
    );
    this.membres = this.membreService.getMembres();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onDeleteMembre(index: number){
    this.membreService.deleteMembre(index);
  }

}
