import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const storageUserKey = 'currentUser';
// const storageUserRoleKey = 'userRole';
const storageSessionKey = 'sessionKey';

@Injectable()
export class AuthenticationService {
    private requester: AjaxRequesterService<User>;
    private _currentUser: User;
    private userService: UserService;

    constructor(requester: AjaxRequesterService<User>, userService: UserService) {
        this.requester = requester;
        this.userService = userService;
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

    getCurrentUser(): string {
        return localStorage.getItem(storageUserKey);
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem(storageSessionKey) && !!localStorage.getItem(storageUserKey);
    }

    userIs(role: string): boolean {
        if (!this.isLoggedIn()) {
            return false;
        }

        return false;

        // TODO:
        // if (!this._currentUser) {
        //     this.userService.getUserByUsername(this.getCurrentUser())
        //         .subscribe(user => {
        //
        //         });
        // } else {
        //
        // }
    }
}
