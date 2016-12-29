import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models';

@Component({
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    model: any = {};
    user: User;

    constructor(private router: Router,
                private userService: UserService,
                private auth: AuthenticationService) {
        this.user = new User();
    }

    ngOnInit() {
        this.getCurrentUser();
    }

    getCurrentUser() {
        this.userService.getUserByUsername(this.auth.getCurrentUser())
            .subscribe(
                data => {
                    this.user = data[0] as User;
                    this.user.imagePath = this.user.imagePath || require('../../../images/default.png');
                    // this.router.navigate(['/profile']);
                },
                error => {
                    console.log(error.message);
                }
            );
    }

    uploadPhotoForUser(){
        this.userService.uploadPhoto(this.auth.getCurrentUser())
        .subscribe(
            data =>{
                console.log(this.user);
                this.user = data[0] as User;
            },
            error => {
                console.log(error);
            }
        )
    }
}