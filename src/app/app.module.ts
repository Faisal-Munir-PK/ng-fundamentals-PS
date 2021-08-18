import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventList } from '../app/events/event-list.component';
import { EventThumbnail } from '../app/events/event-thumbnail.component';
import { NavBar } from '../app/nav/nav-bar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';

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
  providers:[
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
