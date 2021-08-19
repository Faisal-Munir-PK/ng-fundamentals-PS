import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from '../user/user-routes.component';
import { ProfileComponent } from '../user/profile.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  providers: [],
  declarations: [ProfileComponent],
})
export class UserModule {}
