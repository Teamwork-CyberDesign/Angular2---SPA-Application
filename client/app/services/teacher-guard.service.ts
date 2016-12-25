import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthGuard } from './auth-guard.service';

@Injectable()
export class TeacherGuard extends AuthGuard {

    constructor(auth: AuthenticationService,
                router: Router,
                notifier: NotificationsService) {
        super(auth, router, notifier);
    }

    canActivate(): boolean {
        if (super.canActivate()) {
            // TODO:
            // return this.auth.userIs('teacher');
            return true;
        }
        this.notifier.error('Error', 'You must be a teacher in order to do that!');
        return false;
    }
}
