import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { CookieOptions } from 'angular2-cookie/services/base-cookie-options';
import { Router } from '@angular/router';

const storageUserKey = 'currentUser';
const storageUserRoleKey = 'userRole';
const storageSessionKey = 'sessionKey';

@Injectable()
export class AuthenticationService {
    private requester: AjaxRequesterService<User>;
    private notifier: NotificationsService;
    private cookieService: CookieService;
    private router: Router;

    constructor(requester: AjaxRequesterService<User>,
                notifier: NotificationsService,
                router: Router,
                cookieService: CookieService) {
        this.router = router;
        this.requester = requester;
        this.notifier = notifier;
        this.cookieService = cookieService;
    }

    login(username: string, password: string): Observable<User> {
        return this.requester.post('/api/authenticate', { username: username, password: password }, false)
            .flatMap((sessionInfo) => {
                if (sessionInfo.username && sessionInfo.token) {
                    let now = new Date();
                    let options = new CookieOptions();
                    options.expires = new Date(now.setTime(now.getTime() + 31 * 86400000));
                    this.cookieService.put(storageUserKey, sessionInfo.username, options);
                    this.cookieService.put(storageSessionKey, sessionInfo.token, options);
                    this.cookieService.put(storageUserRoleKey, sessionInfo.role, options);
                }

                return Promise.resolve(sessionInfo);
            });
    }

    logout(): void {
        this.cookieService.remove(storageSessionKey);
        this.cookieService.remove(storageUserKey);
        this.cookieService.remove(storageUserRoleKey);

        this.router.navigate(['/']);
        this.notifier.success('Success', 'You have logged out successfully');
    }

    getCurrentUser(): string {
        return this.cookieService.get(storageUserKey);
    }

    getRole(): string {
        return this.cookieService.get(storageUserRoleKey);
    }

    isLoggedIn(): boolean {
        return !!this.cookieService.get(storageUserKey)
            && !!this.cookieService.get(storageSessionKey)
            && !!this.cookieService.get(storageUserRoleKey);
    }

    userIs(role: string): boolean {
        if (!this.isLoggedIn()) {
            return false;
        }

        return role === this.getRole();
    }
}
