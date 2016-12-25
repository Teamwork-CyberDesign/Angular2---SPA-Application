import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private requester: AjaxRequesterService<User>) {
    }

    login(username: string, password: string): Observable<User> {
        return this.requester.post('/api/authenticate', { username: username, password: password })
            .flatMap((sessionInfo) => {
                if (sessionInfo.username && sessionInfo.token) {
                    localStorage.setItem('currentUser', sessionInfo.username);
                    localStorage.setItem('session', sessionInfo.token);
                }

                return Promise.resolve(sessionInfo);
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('session');
    }
}
