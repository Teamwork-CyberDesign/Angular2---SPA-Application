import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Class, User, Student } from '../../models';
import { UserService } from '../../services/user.service';
import { StudentService } from '../../services/student.service';

@Component({
    templateUrl: 'create-student.component.html'
})

export class CreateStudentComponent {
    private userService: UserService;
    private classService: ClassService;
    private studentService: StudentService;
    private notifier: NotificationsService;
    private studentClass: string;
    private model: Student;
    private classes: Class[];

    constructor(classService: ClassService,
                studentService: StudentService,
                userService: UserService,
                notifier: NotificationsService) {
        this.classService = classService;
        this.studentService = studentService;
        this.userService = userService;
        this.notifier = notifier;

        this.model = new Student();
        this.classes = [];
    }

    ngOnInit() {
        this.classService.getClasses()
            .subscribe(
                (classes) => {
                    this.classes = classes;
                },
                (err) => {
                    this.notifier.error('Error', err.message);
                });
    }

    createStudent() {
        console.log(this.model);
        this.userService.createUser(this.model.user)
            .subscribe(user => {
                console.log(user);
            }, err => {

            });
        //     if (!this.model.user.username || this.model.user.username.length < 1) {
    //         this.notifier.error('Error', 'Teacher username is required!');
    //         return;
    //     }
    //
    //     // if (!this.model.subject) {
    //     //     this.notifier.error('Error', 'Teacher subject is required!');
    //     //     return;
    //     // }
    //     //
    //     // if (!this.model.classes || this.model.classes.length < 1) {
    //     //     this.notifier.error('Error', 'Teacher classes are required!');
    //     //     return;
    //     // }
    //
    //     this.studentService.createStudent();
    }

    handleSelectChange(grade: string) {
        this.studentClass = grade;
        console.log(grade);
    }
}
