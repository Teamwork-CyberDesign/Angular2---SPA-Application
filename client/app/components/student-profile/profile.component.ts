import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit{
    model: any = {};
    user: any = [];

    constructor(private router: Router,
                private userService: UserService) {
    }

    ngOnInit(){
        this.getCurrentUser();
    }

    getCurrentUser() {
        this.userService.getUserByUsername("alex0101")
            .subscribe(
                data => {
                    this.user.push(data[0]);
                    console.log(this.user);
                    //this.router.navigate(['/profile']);
                },
                error => {
                    console.log(error);
                }
            );
    }
}