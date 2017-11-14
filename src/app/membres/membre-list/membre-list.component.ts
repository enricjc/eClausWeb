import { Component, OnInit, OnDestroy } from '@angular/core';
import { Membre } from '../membre.model';
import { Subscription } from 'rxjs/Subscription';
import { ConfirmComponent } from '../../shared/modal/confirm/confirm.component';

import { DialogService } from 'ng2-bootstrap-modal';
import { MembreService } from '../membre.service';

@Component({
  selector: 'app-membre-list',
  templateUrl: './membre-list.component.html',
  styleUrls: ['./membre-list.component.css']
})
export class MembreListComponent implements OnInit, OnDestroy {
  membres: any[];
  subscription: Subscription;
  getMembresSubscription: Subscription;
  deleteMembreSubscription: Subscription;
  confirmEsborrar = false;

  constructor(private membresService: MembreService,
    private dialogService: DialogService) { }

  ngOnInit() {
    /*this.subscription = this.membresService.membresChanged
      .subscribe(
      (membres: any[]) => {
        this.membres = membres;
      }
    );*/

    this.getMembresSubscription = this.membresService.getMembres()
      .subscribe(
      (membres: any) => {
        this.membres = membres;
      }
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.getMembresSubscription) {
      this.getMembresSubscription.unsubscribe();
    }
    if (this.deleteMembreSubscription) {
      this.deleteMembreSubscription.unsubscribe();
    }
  }

  onDeleteMembre(id: string) {
    this.dialogService.addDialog(ConfirmComponent, {
      titol: 'Esborra membre',
      missatge: 'Vols esborrar aquest membre?'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.deleteMembreSubscription = this.membresService.deleteMembre(id)
            .subscribe(
            (membres: any) => {
              this.membres = this.membres.filter(m => m._id !== id);;
            },
            error => console.log(error)
            );
        }
      });

  }

}
