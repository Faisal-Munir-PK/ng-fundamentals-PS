import { Injectable } from '@angular/core';
import { IUser } from './user.model';
@Injectable()
export class AuthService {
  currentUser: any;
  login(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Faisal',
      lastName: 'Munir',
    };
  }
  isAuthenticated(){
    return !!this.currentUser;
  }
}
