import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// Import our authentication service
import { AuthenticationService } from './authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthGuard implements CanActivate {
    private auth: AuthenticationService;
    private router: Router;
    private notifier: NotificationsService;

    constructor(auth: AuthenticationService, router: Router, notifier: NotificationsService) {
        this.auth = auth;
        this.router = router;
        this.notifier = notifier;
    }

    canActivate() {
        if (!this.auth.isLoggedIn()) {
            this.notifier.error('Error', 'You must be logged in to do that!');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}