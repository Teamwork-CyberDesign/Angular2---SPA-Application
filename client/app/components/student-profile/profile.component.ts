import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User, Student } from '../../models';
import { FileUploader } from 'ng2-file-upload';

@Component({
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    public uploader: FileUploader = new FileUploader({ url: '/api/profile/photo' });
    model: Student;
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

    uploadPhotoForUser() {
        this.userService.uploadPhoto(this.auth.getCurrentUser())
            .subscribe(
                data => {
                    this.user = data[0] as User;
                    console.log(data);
                },
                error => {
                    console.log(error);
                }
            );
    }
}
