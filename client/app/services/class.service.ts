import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Class } from '../models/class';

@Injectable()
export class ClassService {
private classUrl = '/api/class';

    constructor(private http: Http) {
    }

    createClass(cl: Class): Promise<Class> {
        console.log(cl);
        return this.post(cl);
    }

    private post(cl: Class): Promise<Class> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.classUrl, JSON.stringify(cl), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
    }
}