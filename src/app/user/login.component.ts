import { Component } from '@angular/core';

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
//   ngForm:any
  login(loginForm: any) {
    console.log(loginForm);
  }
}
