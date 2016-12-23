import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};

    constructor(private router: Router,
                private userService: UserService) {
    }

    register() {
        this.userService.createUser(this.model)
            .then(
                data => {
                    console.log(data);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log(error);
                }
            );
    }
}
