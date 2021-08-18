import { Component, Input } from "@angular/core";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail { min-height: 210px; },
        .early { color: green }
        .late { color: orange },
        .normal { color: black },
        #event-title { text-decoration:none; color: #31475B, text-shadow: 1px 1px 0px #ff0000; }
    `]
})
export class EventThumbnail {
    @Input() event:any;

    constructor(private toastr:ToastrService){

    }

    timeClass(){
        switch (this.event.time) {
            case '8:00 am' : 
                return ['early'];
            case '10:00 am' :
                return ['late'];
            default: 
                return ['normal']
        }
    }

    nameClick(eventName:any){
        this.toastr.success(eventName)
      }

}