import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../app/errors/404.component';
import {
  CreateEvent,
  EventDetails,
  EventListResolver,
  EventList,
  EventRouteActivator,
} from './events/index';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    component: EventList,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/new',
    component: CreateEvent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetails,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
