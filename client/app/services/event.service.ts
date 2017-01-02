import { Injectable } from '@angular/core';
import { SchoolEvent } from '../models';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class EventService {
    private cache: any;
    private eventUrl = '/api/event';
    private requester: AjaxRequesterService<SchoolEvent>;
    private auth: AuthenticationService;

    constructor(requester: AjaxRequesterService<SchoolEvent>, auth: AuthenticationService) {
        this.requester = requester;
        this.auth = auth;
        this.cache = {};
    }

    createEvent(event: SchoolEvent): Observable<any> {
        return this.requester.post(this.eventUrl, event, true);
    }

    modifyEvent(event: SchoolEvent): Observable<any> {
        return this.requester.put(this.eventUrl, event, true);
    }

    getEvents(): Observable<any> {
        return this.requester.get(this.eventUrl);
    }

    getEventById(id: string): Observable<any> {
        if (this.cache[id]) {
            return Observable.of(this.cache[id]);
        }

        return this.requester.get(this.eventUrl + '/' + id)
            .flatMap(event => {
                if (event.err || event.errmsg) {
                    return Promise.resolve(event);
                }

                this.cache[event._id] = event;
                return Promise.resolve(event);
            });
    }
}
