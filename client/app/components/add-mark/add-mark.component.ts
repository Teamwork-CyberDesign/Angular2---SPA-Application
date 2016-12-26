import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { subjects} from '../../utils/subjects-data';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    templateUrl: 'add-mark.component.html'
})
export class AddMarkComponent implements OnInit {
    returnUrl: string;
    students: User[]
    subjects: string[] = subjects;
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
