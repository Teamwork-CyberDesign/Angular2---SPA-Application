import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit{
    users: User[];
    selectedUser: User;
    error: any;

    constructor(private router: Router,
                private userService: UserService) {
    }

    ngOnInit() {
        this.loadUsers()
    }

    loadUsers() {
         this.userService.getAllUsers()
                           .subscribe(
                               users => this.users = users,
                                err => {
                                    console.log(err);
                                });
    }1
    onSelect(user: User): void {
        this.selectedUser = user;
    }
}