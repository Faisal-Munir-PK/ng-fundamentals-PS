import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/events.service";
@Component({
    selector: 'event-list',
    templateUrl: './event-list.component.html'
})

export class EventList implements OnInit {
    
  events:any
  constructor(private eventService: EventService, private toastr:ToastrService){
    
  }

  ngOnInit(){
    return this.events = this.eventService.getEvents();
  }

  selectedEvent(data:any){
      console.log('Parent data received ' + data);
  }

  thumnailClick(eventName:any){
    this.toastr.success(eventName)
  }
}