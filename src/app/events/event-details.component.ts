import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "./shared/events.service";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles:[`
        .event-image { height: 10em; }
    `]
})
export class EventDetails implements OnInit{
    event:any

    constructor(private eventService:EventService, private route:ActivatedRoute){ }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}