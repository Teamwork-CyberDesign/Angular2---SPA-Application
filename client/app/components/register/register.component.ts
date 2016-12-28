import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { User } from '../../models/user';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: User;

    constructor(private router: Router,
                private userService: UserService,
                private notifier: NotificationsService) {
        this.model = new User();
    }

    register() {
        this.userService.createUser(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    if (data.errmsg) {
                        this.notifier.error('Error', data.errmsg);
                    } else {
                        this.notifier.success('Success', 'Registration has completed successfully.');
                        this.notifier.info('Note:', 'Now you must log in to get access of your profile.');
                        this.router.navigate(['/login']);
                    }
                },
                error => {
                    console.log(error);
                }
            );
    }
}
