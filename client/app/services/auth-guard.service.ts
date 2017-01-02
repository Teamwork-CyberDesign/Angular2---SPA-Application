import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthGuard implements CanActivate {
    protected auth: AuthenticationService;
    protected router: Router;
    protected notifier: NotificationsService;

    constructor(auth: AuthenticationService,
                router: Router,
                notifier: NotificationsService) {
        this.auth = auth;
        this.router = router;
        this.notifier = notifier;
    }

    canActivate(): boolean {
        if (!this.auth.isLoggedIn()) {
            this.notifier.error('Error', 'You must be logged in to do that!');
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
