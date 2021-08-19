import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventList implements OnInit {
  events: any;
  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.eventService.getEvents().subscribe(event => {this.events = event});
    this.events = this.route.snapshot.data['events'];
  }

  selectedEvent(data: any) {
    console.log('Parent data received ' + data);
  }

  thumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
