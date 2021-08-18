import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventList } from './events/event-list.component';
const routes: Routes = [
  { 
    path: 'all-events', 
    component: EventList
  },
  { 
    path: '',
    component: EventList
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
