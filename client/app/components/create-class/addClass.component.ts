import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService} from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { UserService } from '../../services/user.service';
import { subjects} from '../../utils/subjects-data';
import { grades} from '../../utils/grades-data';
import { User } from '../../models/user';

@Component({
    templateUrl: 'add-class.component.html'
})
export class AddClassComponent implements OnInit{
    returnUrl: string;
    model: any = {};
    subjects: string[] = subjects;
    grades: string[] = grades;
    students: User[]
    autoCompleteModelSubjects: any;
    autoCompleteModelGrades: any;
    autoCompleteModelStudents: User[];

    constructor(private router: Router,
                private classService: ClassService,
                private userService: UserService,
                private notifier: NotificationsService) {
    }

        ngOnInit() {
        this.loadUsers();
    }

    loadNewClass() {
        this.classService.createClass(this.model)
            .subscribe(
                data => {
                    console.log(data);
                    this.notifier.success('Success', 'You create new class successfully');
                    this.router.navigate(['/']);
                },
                error => {
                    this.notifier.error('Error', error);
                    console.log(error);
                }
            );
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