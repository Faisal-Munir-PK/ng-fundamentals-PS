import { Router, ActivatedRouteSnapshot, CanActivate, ActivatedRoute  } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "./shared/events.service";

@Injectable()
export class EventRouteActivator implements CanActivate{
    constructor(private eventService: EventService, private router: ActivatedRoute, private route: Router){ }
    
    canActivate(route:ActivatedRouteSnapshot): any{
        const eventExist = !!this.eventService.getEvent(+route.params['id'])
        
        if(!eventExist)
            this.route.navigate(['/404'])
        return eventExist;
    }
    
}