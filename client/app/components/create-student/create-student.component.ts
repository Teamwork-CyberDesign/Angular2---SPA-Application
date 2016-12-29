import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Student } from '../../models';
import { StudentService } from '../../services/student.service';

@Component({
    templateUrl: 'create-student.component.html',
    selector: 'create-student'
})

export class CreateStudentComponent {
    private studentService: StudentService;
    private notifier: NotificationsService;
    private model: Student;

    constructor(studentService: StudentService,
                notifier: NotificationsService) {
        this.studentService = studentService;
        this.notifier = notifier;
        this.model = new Student();
    }

    createStudent(a: any) {
        this.studentService.createStudent(this.model)
            .subscribe(res => {
                if (res.err || res.errmsg) {
                    this.notifier.error('Error', res.err || res.errmsg);
                } else {
                    a.reset();
                    this.notifier.success('Success', 'Student has been created!');
                }
            }, err => {
                this.notifier.error('Error', err);
            });
    }
}
