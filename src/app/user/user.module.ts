import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent, ProfileComponent, userRoutes } from './index';
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  providers: [],
  declarations: [ProfileComponent, LoginComponent],
})
export class UserModule {}
