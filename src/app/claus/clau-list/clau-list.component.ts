import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertAssignarClauComponent } from './clau-item/modal-assignar-clau-item.component';
import { ClausService } from '../claus.service';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-clau-list',
  templateUrl: './clau-list.component.html',
  styleUrls: ['./clau-list.component.css']
})
export class ClauListComponent implements OnInit, OnDestroy {
  claus: any[]
  idClauChanged: string;
  propietariChangedSubscription: Subscription;
  clausSubs: Subscription;

  constructor(private clausService: ClausService, private dialogService: DialogService) { }

  ngOnInit() {
    // TODO
    // Cal crear la lògica backend MEMBRE abans de modificar aquesta funcionalitat.
    /*this.propietariChangedSubscription = this.clausService.propietariChanged
      .subscribe(
        (propietari: any) => {
          this.claus.filter(c=>c._id == this.idClauChanged);
        }
    );*/
    this.clausSubs = this.clausService.getClaus()
      .subscribe(
      (claus: any) => {
        this.claus = claus;
      }
      );
  }

  ngOnDestroy() {
    if (this.clausSubs) {
      this.clausSubs.unsubscribe();
    }
  }

  onChange(idClau: string) {
    this.idClauChanged = idClau;
    this.dialogService.addDialog(AlertAssignarClauComponent,
      {
        title: 'Assignació de claus',
        message: 'Selecciona el nou propietari',
        idClau: idClau
      });
  }

}
