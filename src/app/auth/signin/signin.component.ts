import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService} from '../auth.service';
import { DataService} from '../../data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private authService: AuthService,
              private dataService: DataService) { }

  ngOnInit() {
    this.initForm();
    this.dataService.getUsers()
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  private initForm() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.signinUser(this.signinForm.value.email, this.signinForm.value.password);
  }
}
