import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '.././models/user';
import { UserService } from '.././services/user.service';

@Component({
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    register() {
       this.userService.createUser(this.model)
       .subscribe(
           data => {
               this.router.navigate(['/login']);
           },
           error => {
               console.log(error);
           }
       )
    } 
}