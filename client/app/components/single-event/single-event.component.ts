import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { SchoolEvent } from '../../models';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: 'single-event.component.html'
})

export class SingleEventComponent implements OnInit {
    private model: SchoolEvent;
    private sub: Subscription;

    constructor(private auth: AuthenticationService,
                private eventService: EventService,
                private notifier: NotificationsService,
                private route: ActivatedRoute) {
        this.model = new SchoolEvent();
    }

    ngOnInit() {
        this.sub = this.route.params
            .flatMap(params => {
                let id = params['id'];
                return this.eventService.getEventById(id);
            })
            .subscribe(event => {
                this.model = event;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

