import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs';
import { SchoolEvent } from '../../models';
import { EventService } from '../../services/event.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: 'event-form.component.html',
    selector: 'event-form'
})

export class EventFormComponent implements AfterContentInit {
    @Input() schoolEvent: SchoolEvent;
    @Output() onFormSuccess = new EventEmitter<boolean>();
    private isCreate: boolean;
    private buttonText: string;

    constructor(private eventService: EventService,
                private auth: AuthenticationService,
                private notifier: NotificationsService) {
    }

    ngAfterContentInit(): void {
        this.buttonText = this.schoolEvent ? 'Edit' : 'Create New Event';
        if (!this.schoolEvent) {
            this.isCreate = true;
            this.schoolEvent = new SchoolEvent();
        }
    }

    onSubmit(close): void {
        let sub: Observable<any>;
        if (this.isCreate) {
            this.schoolEvent.createdBy = this.auth.getCurrentUser();
            sub = this.eventService.createEvent(this.schoolEvent);
        } else {
            sub = this.eventService.modifyEvent(this.schoolEvent);
        }

        sub.subscribe(res => {
            if (res.err || res.errmsg) {
                this.notifier.error('Error', res.err || res.errmsg);
            } else {
                close.click();
                this.onFormSuccess.emit(true);
                this.notifier.success('Success', 'Event saved!');
            }
        });
    }
}

