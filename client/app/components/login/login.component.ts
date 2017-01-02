import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private notifier: NotificationsService) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log(data);
                    if (data.username === this.model.username) {
                        this.router.navigate(['/profile']);
                        this.notifier.success('Success', 'You have logged in successfully');
                    } else {
                        this.notifier.error('Error', 'Invalid username or password');
                    }
                },
                error => {
                    this.notifier.success('Error', error);
                    console.log(error);
                }
            );
    }
}
