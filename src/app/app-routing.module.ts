import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../app/errors/404.component';
import { CreateEvent } from './events/create-event.component';
import { EventDetails } from './events/event-details.component';
import { EventList } from './events/event-list.component';
import { EventRouteActivator } from './events/event-router-activator.component';
const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events', component: EventList },
  { path: 'events/new', component: CreateEvent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetails, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
