import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from '../app/nav/nav-bar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from '../app/errors/404.component';
import {
  CreateEvent,
  EventDetails,
  EventListResolver,
  EventList,
  EventThumbnail,
  EventService,
  EventRouteActivator,
} from './events/index';

@NgModule({
  declarations: [
    AppComponent,
    EventList,
    EventThumbnail,
    NavBar,
    EventDetails,
    CreateEvent,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkState(component: CreateEvent) {
  if (component.state)
    return window.confirm(
      'You have not saved your data, are you sure to leave the page?'
    );
  return true;
}
