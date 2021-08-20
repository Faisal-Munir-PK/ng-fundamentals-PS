import { LoginComponent, ProfileComponent } from './index';

export const userRoutes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];
