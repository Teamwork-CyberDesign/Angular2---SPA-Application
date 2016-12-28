import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Class, Student } from '../../models';
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
        this.studentService.createStudent(this.model, this.studentClass)
            .subscribe(res => {
                console.log(res);
                if (res.err || res.errmsg) {
                    this.notifier.error('Error', res.err || res.errmsg);
                } else {
                    this.notifier.success('Success', 'Student has been created!');
                }
            }, err => {
                this.notifier.error('Error', err);
            });
    }
}
