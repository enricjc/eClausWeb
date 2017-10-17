import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Membre } from '../../../membres/membre.model';

import { ClausService } from '../../claus.service';
import { MembreService } from '../../../membres/membre.service';

export interface AlertAssignarClauModel {
  title: string;
  message: string;
  indexClau: number;
  membres: Membre[];
  assignForm: FormGroup;
}

@Component({
  selector: 'alert',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{title || 'Alert!'}}</h4>
                   </div>
                   <div class="modal-body">
                     <p>{{message || 'TADAA-AM!'}}</p>
                   </div>
                     <div class="form-group">
                          <form [formGroup]="assignForm" (ngSubmit)="onSubmit()">
                            <div class="modal-body">
                               <select class="form-control" formControlName="membre" id="membre">
                                  <option *ngFor="let m of membres; let i = index;"
                                         [value]="i">
                                   {{m.nom}} {{m.cognoms}}
                                 </option>
                               </select>
                             </div>
                            <div class="modal-footer">
                              <button class="btn btn-primary" type="submit" (click)="close()">OK</button>
                            </div>
                          </form>
                     </div>
                </div>
             </div>`
})
export class AlertAssignarClauComponent extends DialogComponent<AlertAssignarClauModel, null> implements AlertAssignarClauModel {
  title: string;
  message: string;
  indexClau: number;
  membres: Membre[];
  assignForm: FormGroup;

  constructor(dialogService: DialogService,
    private clausService: ClausService,
    private membresService: MembreService) {
    super(dialogService);
    this.membres = this.membresService.getMembres();
    this.initForm();
  }

  private initForm() {
    this.assignForm = new FormGroup({
      'membre': new FormControl(this.membres)
    });
  }

  onSubmit() {
    const indexMembre = this.assignForm.value['membre'];
    this.clausService.assignarPropietariClau(this.indexClau, indexMembre);
  }

}
