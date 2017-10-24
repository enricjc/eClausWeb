import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AuthService} from '../auth.service';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupSubscription: Subscription;
  MIN_LENGTH_PWD = 4;

  constructor(private authService: AuthService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(this.MIN_LENGTH_PWD)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(this.MIN_LENGTH_PWD)]),
    }, this.passwordMatchValidator);
  }

  minLength(minimum) {
    return function(input) {
      return input.value.length >= minimum ? null : { minLength: true };
    };
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    this.authService.signupUser(this.signupForm.value.email, this.signupForm.value.password);
    /*this.signupSubscription = this.dataService.addUser(this.signupForm.value.email, this.signupForm.value.password)
      .subscribe(
      data => console.log(data),
      err => console.log(err)
    );*/
  }

}
