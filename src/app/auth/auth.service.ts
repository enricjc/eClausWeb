import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable()
export class AuthService {
  users: User[] = [];

  constructor() { }

  addUser(email: string, password: string){
    this.users.push(new User(email, password));
    console.log(this.users);
  }

  signinUser(email: string, password: string){
    const user = new User(email, password);
    console.log(this.users.find(u=> u.email === user.email && u.password === user.password));
  }
}
