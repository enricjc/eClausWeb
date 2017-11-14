import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { MembreService } from '../membre.service';

import { Membre } from '../membre.model';

@Component({
  selector: 'app-membre-edit',
  templateUrl: './membre-edit.component.html',
  styleUrls: ['./membre-edit.component.css']
})
export class MembreEditComponent implements OnInit {
  membre: any;
  id: string;
  isEdit = false;
  membreForm: FormGroup;
  getMembreSubscription: Subscription;
  insertMembreSubscription: Subscription;
  updateMembreSubscription: Subscription;

  constructor(private membreService: MembreService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.isEdit = params['id'] != null;
      }
      );

    if (this.id != null) {
      this.getMembreSubscription = this.membreService.getMembre(this.id)
        .subscribe(
        (membre: any) => {
          this.membre = membre;
          this.membreForm.patchValue({
            nom: this.membre.nom,
            cognoms: this.membre.cognoms,
            telefon: this.membre.telefon,
            email: this.membre.email,
          });
        },
        error => console.log(error)
        );
    }
    this.initForm();
  }

  private initForm() {
    this.membreForm = new FormGroup({
      'nom': new FormControl('', [Validators.required]),
      'cognoms': new FormControl('', [Validators.required]),
      'telefon': new FormControl('', [Validators.required, Validators.pattern(/^[9|6|7][0-9]{8}$/)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
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

  onCancel() {
    this.router.navigate(['/membres']);
  }

  onSubmit() {
    if (this.isEdit) {
      this.updateMembreSubscription = this.membreService.updateMembre(
        this.membre._id,
        this.membreForm.value.nom,
        this.membreForm.value.cognoms,
        this.membreForm.value.telefon,
        this.membreForm.value.email)
        .subscribe(
        (membre: any) => {
          this.router.navigate(['/membres']);
        },
        error => console.log(error)
        );
    } else {
      this.insertMembreSubscription = this.membreService.insertMembre(
        this.membreForm.value.nom,
        this.membreForm.value.cognoms,
        this.membreForm.value.telefon,
        this.membreForm.value.email)
        .subscribe(
        (membre: any) => {
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error => console.log(error)
        );
    }
  }

}
