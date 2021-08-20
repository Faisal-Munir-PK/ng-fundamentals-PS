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
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';

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
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
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
