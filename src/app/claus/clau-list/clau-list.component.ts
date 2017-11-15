import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertAssignarClauComponent } from './clau-item/modal-assignar-clau-item.component';
import { AlertComponent } from '../../shared/modal/alert/alert.component';
import { DropDownSelectModalComponent } from '../../shared/modal/dropdown-select-modal/dropdown-select-modal.component';
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
  showAlert = false;
  clausSubscription: Subscription;

  constructor(private clausService: ClausService, private dialogService: DialogService) { }

  ngOnInit() {
    this.propietariChangedSubscription = this.clausService.clausChanged
      .subscribe(
      (data: any) => {
        if (data != null) {
          this.clausSubscription = this.clausService.getClaus()
            .subscribe(
            (claus: any) => {
              this.claus = claus;
            }
            );
        } else {
          this.showAlert = true;
        }
      }
      );

    this.clausSubscription = this.clausService.getClaus()
      .subscribe(
      (claus: any) => {
        this.claus = claus;
      }
      );
  }

  ngOnDestroy() {
    if (this.clausSubscription) {
      this.clausSubscription.unsubscribe();
    }
    if (this.propietariChangedSubscription) {
      this.propietariChangedSubscription.unsubscribe();
    }
  }

  onChange(idClau: string) {
    this.idClauChanged = idClau;

    this.dialogService.addDialog(DropDownSelectModalComponent, {
      titol: 'Assignació de claus',
      missatge: 'Selecciona el nou propietari'
    })
      .subscribe((idNouPropietari) => {
        if (idNouPropietari != null && idClau != null) {
          this.clausService.assignarPropietariClau(idClau, idNouPropietari);
        }
      });
  }

  cancelAlert() {
    this.showAlert = false;
  }

}
