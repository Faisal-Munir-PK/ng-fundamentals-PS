import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetails } from './events/event-details.component';
import { EventList } from './events/event-list.component';
const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/events',
    pathMatch: 'full'
  },
  { 
    path: 'events', 
    component: EventList
  },
  { 
    path: 'events/:id',
    component: EventDetails
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
