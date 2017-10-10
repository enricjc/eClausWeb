import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ClausService } from '../claus.service';

import { Clau } from '../clau.model';


@Component({
  selector: 'app-clau-edit',
  templateUrl: './clau-edit.component.html',
  styleUrls: ['./clau-edit.component.css']
})
export class ClauEditComponent implements OnInit {
  clau: Clau;
  index: number;
  clauForm: FormGroup;
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
        this.index = +params['id'];
        this.clau = this.clausService.getClau(this.index);
      });

    this.initForm();
  }

  private initForm() {
    this.clauForm = new FormGroup({
      'nom': new FormControl(this.clau.nom, [Validators.required, Validators.minLength(this.MIN_LENGTH_NOM), Validators.maxLength(this.MAX_LENGTH_NOM)]),
      'descripcio': new FormControl(this.clau.descripcio, [Validators.required, Validators.minLength(this.MIN_LENGTH_DESCRIPCIO), Validators.maxLength(this.MAX_LENGTH_DESCRIPCIO)])
    });
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    console.log(this.clauForm);
    this.router.navigate(['../'], {relativeTo: this.route});
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
