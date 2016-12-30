import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Class } from '../models/class';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ClassService {
    private classUrl = '/api/class';
    private requester: AjaxRequesterService<Class>;
    private auth: AuthenticationService;

    constructor(requester: AjaxRequesterService<Class>, auth: AuthenticationService) {
        this.requester = requester;
        this.auth = auth;
    }

    createClass(cl: Class): Observable<any> {
        return this.requester.post(this.classUrl, cl, true);
    }

    getClasses(/*classNumber: string*/): Observable<any> {
        return this.requester.get(this.classUrl);
    }

    getClassesForCurrentUser(): Observable<any> {
        let username = this.auth.getCurrentUser();
        if (username) {
            return this.requester.get(this.classUrl + '/' + username);
        }
    }

    getClassesWithSubject(subject: string): Observable<any> {
        return this.requester.get(`${this.classUrl}/subject/${subject}/`);
    }
}
