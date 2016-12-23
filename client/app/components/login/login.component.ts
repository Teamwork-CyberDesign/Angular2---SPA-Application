import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import { AuthenticationService} from '../../services/authentication.service';

@Component({
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{
    model: any = {};
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    ngOnInit(){
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
        .subscribe(
            data => {
                console.log(data);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log(error);
            }
        )
    }
}