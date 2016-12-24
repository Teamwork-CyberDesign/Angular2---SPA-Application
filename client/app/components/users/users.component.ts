import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})

export class UsersComponent{
    users: User[];
    selectedUser: User;
    error: any;

    constructor(private router: Router,
                private userService: UserService) {
         this.userService.getAllUsers()
             .subscribe(users => {
                 this.users = users;
             });
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }
}