import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';

import { UserService } from '../services/user.service';

@Component({
    selector: 'users-properties',
    templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit{
    users: User[];
    selectedUser: User;
    error: any;

    constructor(
        private router: Router,
        private userService: UserService
    ) {}

    ngOnInit(): void{
        this.viewAllUsers();
    }

    viewAllUsers(): void {
       this.userService.getAllUsers()
       .then(
           users => {
               this.users = users;
               this.router.navigate(['/users']);
           },
           error => {
               this.error = error;
               console.log(error);
           }
       )
    }

    onSelect(user: User): void {
        this.selectedUser = user;
  } 
}