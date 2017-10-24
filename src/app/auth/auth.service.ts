import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Injectable()
export class AuthService {
  token: string;
  signupSubscription: Subscription;
  signinSubscription: Subscription;
  tokenChanged = new Subject<string>();

  constructor(private dataService: DataService,
              private router: Router) { }

  signupUser(email: string, password: string){
    this.signupSubscription = this.dataService.addUser(email, password)
      .subscribe(
      data => this.router.navigate(['/signin']),
      err => console.log(err)
      );
  }

  signinUser(email: string, password: string){
    this.signupSubscription = this.dataService.checkUser(email, password)
      .subscribe(
      data => {
        this.token = data;
        this.tokenChanged.next(this.token);
      },
      err => console.log(err)
      );
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    this.token = null;
    this.router.navigate(['/signin']);
  }
}
