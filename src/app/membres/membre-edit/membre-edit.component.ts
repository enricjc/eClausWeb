import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { MembreService } from '../membre.service';

import { Membre } from '../membre.model';

@Component({
  selector: 'app-membre-edit',
  templateUrl: './membre-edit.component.html',
  styleUrls: ['./membre-edit.component.css']
})
export class MembreEditComponent implements OnInit {
  membre: Membre;
  index: number;
  membreForm: FormGroup;

  constructor(private membreService: MembreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.membre = this.membreService.getMembre(this.index);
        }
      )
    this.initForm();
  }

  private initForm() {
    this.membreForm = new FormGroup({
      'nom': new FormControl(this.membre.nom, [Validators.required]),
      'cognoms': new FormControl(this.membre.cognoms, [Validators.required]),
      'telefon': new FormControl(this.membre.telefon, [Validators.required, Validators.pattern(/^[9|6|7][0-9]{8}$/)]),
      'email': new FormControl(this.membre.email, [Validators.required, Validators.email]),
    });
  }

  minLength(minimum) {
    return function(input) {
      return input.value.length >= minimum ? null : { minLength: true };
    }
  }

  maxLength(maximum) {
    return function(input) {
      return input.value.length < maximum ? null : { maxLength: true };
    }
  }

  onCancel(){
    this.router.navigate(['/membres']);
  }

  onSubmit(){
    console.log(this.membreForm);
  }

}
