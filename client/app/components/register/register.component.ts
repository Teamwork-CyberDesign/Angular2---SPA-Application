import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NotificationsService} from 'angular2-notifications';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};

    constructor(private router: Router,
                private userService: UserService,
                private notifier: NotificationsService) {
    }

    register() {
        this.userService.createUser(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.notifier.success('Success', 'Registration has completed successfully.')
                    this.notifier.info('Note:', 'Now you must log in to get access of your profile.')
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                }
            );
    }
}
