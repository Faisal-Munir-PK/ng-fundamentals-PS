import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  constructor(private authService: AuthService) {}
  login(loginForm: any) {
    this.authService.login(loginForm.userName, loginForm.password);
  }
}
