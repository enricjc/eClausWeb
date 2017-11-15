import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { AlertAssignarClauComponent } from './clau-item/modal-assignar-clau-item.component';
import { AlertMessageComponent } from '../../shared/alert-message/alert-message.component';
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
  clausSubscription: Subscription;
  alertMessage: any = {
    mostra: false,
    titol: "",
    missatge: "",
    tipus: ""
  };

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
          this.alertMessage = {
            mostra: true,
            titol: "Error inesperat:",
            missatge: "No s'han pogut desar els canvis, intenta-ho més tard si us plau",
            tipus: "danger"
          }
        }
      }
      );

    this.clausSubscription = this.clausService.getClaus()
      .subscribe(
      (claus: any) => {
        this.claus = claus;
      },
      (error) => this.alertMessage = {
        mostra: true,
        titol: "Error inesperat:",
        missatge: "No s'han pogut carregar les dades, intenta-ho més tard si us plau",
        tipus: "danger"
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

  onChangePropietari(idClau: string) {
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

  onShowAlertMessage(showAlert) {
    this.alertMessage.mostra = showAlert;
  }

}
