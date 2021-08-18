import { Component, Input } from "@angular/core";

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

}