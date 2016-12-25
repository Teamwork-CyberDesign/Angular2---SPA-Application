import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const storageUserKey = 'currentUser';
const storageSessionKey = 'currentUser';

@Injectable()
export class AuthenticationService {
    constructor(private requester: AjaxRequesterService<User>) {
    }

    login(username: string, password: string): Observable<User> {
        return this.requester.post('/api/authenticate', { username: username, password: password })
            .flatMap((sessionInfo) => {
                if (sessionInfo.username && sessionInfo.token) {
                    localStorage.setItem(storageUserKey, sessionInfo.username);
                    localStorage.setItem(storageSessionKey, sessionInfo.token);
                }

                return Promise.resolve(sessionInfo);
            });
    }

    logout(): void {
        localStorage.removeItem(storageSessionKey);
        localStorage.removeItem(storageUserKey);
    }

    currentUser(): string {
        return localStorage.getItem(storageUserKey);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem(storageSessionKey) && !!localStorage.getItem(storageUserKey);
    }
}
