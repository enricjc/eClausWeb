import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { MembreService } from '../../../membres/membre.service';

export interface DropDownSelectModalModel {
  titol: string;
  missatge: string;
  llista: any[];
  form: FormGroup;
  getLlistaSubscription: Subscription;
}

@Component({
  selector: 'dropdown-select-modal',
  templateUrl: './dropdown-select-modal.component.html',
  styleUrls: ['./dropdown-select-modal.component.css']
})

export class DropDownSelectModalComponent extends DialogComponent<DropDownSelectModalModel, string> implements DropDownSelectModalModel {
  titol: string;
  missatge: string;
  llista: any[];
  form: FormGroup;
  getLlistaSubscription: Subscription;

  constructor(dialogService: DialogService,
    private membresService: MembreService) {
    super(dialogService);
    this.getLlistaSubscription = this.membresService.getMembres()
      .subscribe(
      (llista: any) => {
        this.llista = llista;
      }
      );
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      'selected': new FormControl(this.llista)
    });
  }

  onSubmit() {
    const indexMembre = this.form.value['selected'];
    this.result = indexMembre;
    this.close();
    //this.clausService.assignarPropietariClau(this.idClau, this.form.value.membre);
  }

  cancel() {
    this.close();
  }

}
