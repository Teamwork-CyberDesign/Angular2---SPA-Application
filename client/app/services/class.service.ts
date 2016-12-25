import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Class } from '../models/class';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';

@Injectable()
export class ClassService {
    private classUrl = '/api/class';

    constructor(private requester: AjaxRequesterService<Class>) {
    }

    createClass(cl: Class): Observable<Class> {
        console.log(cl);
        return this.requester.post(this.classUrl, cl);
    }

    getClass(/*classNumber: string*/) {
        return this.requester.get(this.classUrl);
    }
}
