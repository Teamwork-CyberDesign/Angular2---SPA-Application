import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Teacher } from '../models/teacher';

@Injectable()
export class TeacherService {
    private url = '/api/teacher';
    private requester: AjaxRequesterService<Teacher>;
    private auth: AuthenticationService;

    constructor(requester: AjaxRequesterService<Teacher>, auth: AuthenticationService) {
        this.requester = requester;
        this.auth = auth;
    }

    createTeacher(teacher: Teacher): Observable<Teacher> {
        // TODO:
        console.log(teacher);
        return this.requester.post(this.url, teacher, true);
    }

    getTeacherByUser(username: string): Observable<Teacher | Teacher[]> {
        return this.requester.get(this.url + `/${username}`);
    }

}
