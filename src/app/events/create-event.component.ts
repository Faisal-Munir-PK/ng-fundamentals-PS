import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styles: [
    `
      .btn.btn-success {
        margin-right: 5px;
      }
    `,
  ],
})
export class CreateEvent {
  state: boolean = true;

  constructor(private route: Router) {}

  cancle() {
    this.route.navigate(['/events']);
  }
}
