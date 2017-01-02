import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { SchoolEvent } from '../../models';
import { EventService } from '../../services/event.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: 'event-list.component.html'
})

export class EventListComponent implements OnInit {
    events: SchoolEvent[];

    constructor(private eventService: EventService,
                private auth: AuthenticationService,
                private notifier: NotificationsService) {
        this.events = [];
    }

    ngOnInit() {
        this.getEvents();
    }

    private getEvents() {
        this.eventService.getEvents()
            .subscribe(
                (events) => {
                    if (events.err || events.errmsg) {
                        this.notifier.error('Error', events.err || events.errmsg);
                    } else {
                        this.events = events;
                    }
                }, (err) => {
                    this.notifier.error('Error', err);
                });
    }
}

