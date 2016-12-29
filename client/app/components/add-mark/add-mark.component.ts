import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models';
import { SubjectsAsString } from '../../enums/subject';
@Component({
    templateUrl: 'add-mark.component.html'
})
export class AddMarkComponent implements OnInit {
    returnUrl: string;
    students: User[];
    subjects: string[] = SubjectsAsString;
    autoCompleteModelSubjects: any;
    autoCompleteModelStudents: User[];

    constructor(private route: ActivatedRoute,
    private userService: UserService) {
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getAllUsers()
            .subscribe(
                users => {
                    this.students = users as User[];
                    console.log(this.students);
                },
                err => {
                    console.log(err);
                });
    }
}
