import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { ClausService } from '../claus.service';

import { Clau } from '../clau.model';


@Component({
  selector: 'app-clau-edit',
  templateUrl: './clau-edit.component.html',
  styleUrls: ['./clau-edit.component.css']
})
export class ClauEditComponent implements OnInit, OnDestroy {
  clau: any;
  id: string;
  clauForm: FormGroup;
  getClauSubscription: Subscription;
  updateClauSubscription: Subscription;

  MIN_LENGTH_NOM = 5;
  MAX_LENGTH_NOM = 30;
  MIN_LENGTH_DESCRIPCIO = 15;
  MAX_LENGTH_DESCRIPCIO = 200;

  constructor(private clausService: ClausService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
      });

    this.getClauSubscription = this.clausService.getClau(this.id)
      .subscribe(
      (clau: any) => {
        this.clau = clau;
        this.clauForm.patchValue({
          nom: this.clau.nom,
          descripcio: this.clau.descripcio
        });
      },
      error => console.log(error)
      );

    this.initForm();
  }

  ngOnDestroy() {
    if (this.getClauSubscription) {
      this.getClauSubscription.unsubscribe();
    }
    if (this.updateClauSubscription) {
      this.updateClauSubscription.unsubscribe();
    }
  }

  private initForm() {
    this.clauForm = new FormGroup({
      'nom': new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH_NOM), Validators.maxLength(this.MAX_LENGTH_NOM)]),
      'descripcio': new FormControl('', [Validators.required, Validators.minLength(this.MIN_LENGTH_DESCRIPCIO), Validators.maxLength(this.MAX_LENGTH_DESCRIPCIO)])
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.updateClauSubscription = this.clausService.updateClau(this.clau._id, this.clauForm.value.nom, this.clauForm.value.descripcio, '')
      .subscribe(
      (clau: any) => {
        this.router.navigate(['../'], { relativeTo: this.route });
      },
      error => console.log(error)
      );
  }

  minLength(minimum) {
    return function(input) {
      return input.value.length >= minimum ? null : { minLength: true };
    };
  }

  maxLength(maximum) {
    return function(input) {
      return input.value.length < maximum ? null : { minLength: true };
    };
  }

}
