import { Component, Input } from "@angular/core";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .thumbnail  { min-height: 210px; },
        .early      { color: green }
        .late       { color: orange },
        .normal     { color: black }
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