import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventList } from '../app/events/event-list.component';
import { EventThumbnail } from '../app/events/event-thumbnail.component';
import { NavBar } from '../app/nav/nav-bar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventDetails } from '../app/events/event-details.component';
import { CreateEvent } from './events/create-event.component';
import { Error404Component } from '../app/errors/404.component';
import { EventRouteActivator } from './events/event-router-activator.component';

@NgModule({
  declarations: [
    AppComponent,
    EventList,
    EventThumbnail,
    NavBar,
    EventDetails,
    CreateEvent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkState }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkState(component:CreateEvent){
  if(component.state)
    return window.confirm('You have not saved your data, are you sure to leave the page?');
  return true;
}