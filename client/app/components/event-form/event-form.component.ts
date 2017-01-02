import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SchoolEvent } from '../../models';
import { EventService } from '../../services/event.service';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: 'event-form.component.html',
    selector: 'event-form'
})

export class EventFormComponent {
    @Input() schoolEvent: SchoolEvent;
    @Output() onFormSuccess = new EventEmitter<boolean>();
    private isEdit: boolean;
    private buttonText: string;

    constructor(private eventService: EventService,
                private auth: AuthenticationService,
                private notifier: NotificationsService) {
    }

    ngAfterContentInit() {
        this.buttonText = this.schoolEvent ? 'Edit' : 'Create New Event';
        if (!this.schoolEvent) {
            this.isEdit = true;
            this.schoolEvent = new SchoolEvent();
        }
    }

    onSubmit() {
        let sub: Observable<any>;
        if (this.isEdit) {
            this.schoolEvent.createdBy = this.auth.getCurrentUser();
            sub = this.eventService.createEvent(this.schoolEvent);
        } else {
            sub = this.eventService.modifyEvent(this.schoolEvent);
        }

        sub.subscribe(res => {
            if (res.err || res.errmsg) {
                this.notifier.error('Error', res.err || res.errmsg);
            } else {
                this.onFormSuccess.emit(true);
                this.notifier.success('Success', 'Event saved!');
            }
        });
    }
}

