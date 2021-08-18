import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventList } from '../app/events/event-list.component';
import { EventThumbnail } from '../app/events/event-thumbnail.component';
import { NavBar } from '../app/nav/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventList,
    EventThumbnail,
    NavBar,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
