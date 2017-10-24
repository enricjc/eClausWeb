import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  submittedForm: Boolean = false;
  signinForm: FormGroup;
  tokenSubscription: Subscription;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.tokenSubscription = this.authService.tokenChanged
      .subscribe(
        (token: string) => {
          if(token != null){
            this.router.navigate(['/claus'])
          }
        }
      );
    /*this.dataService.getUsers()
      .then(result => console.log(result))
      .catch(error => console.log(error));*/
  }

  private initForm() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.signinUser(this.signinForm.value.email, this.signinForm.value.password);
    this.submittedForm = true;
  }
}
