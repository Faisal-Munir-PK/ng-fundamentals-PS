import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent, ProfileComponent, userRoutes } from './index';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
  providers: [],
  declarations: [ProfileComponent, LoginComponent],
})
export class UserModule {}
