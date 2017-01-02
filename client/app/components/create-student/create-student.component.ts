import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Student } from '../../models';
import { StudentService } from '../../services/student.service';
import { Class } from '../../models/class';

@Component({
    templateUrl: 'create-student.component.html',
    selector: 'create-student'
})

export class CreateStudentComponent {
    @Input() studentClass: Class;
    @Output() onFormSubmitted = new EventEmitter<boolean>();
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
        if (this.studentClass) {
            this.model.classNumber = Math.max(...this.studentClass.students.map(st => st.classNumber)) + 1;
        }

        this.studentService.createStudent(this.model)
            .subscribe(res => {
                if (res.err || res.errmsg) {
                    this.notifier.error('Error', res.err || res.errmsg);
                } else {
                    a.reset();
                    this.notifier.success('Success', 'Student has been created!');

                    this.onFormSubmitted.emit(true);

                    if (this.studentClass) {
                        // TODO: fix nesting
                        this.studentService.addStudentToClass(res, this.studentClass.grade)
                            .subscribe(
                                response => {
                                    if (response.err || response.errmsg) {
                                        this.notifier.error('Error', response.err || response.errmsg);
                                    } else {
                                        response.students.forEach(st => {
                                            if (!this.studentClass.students.find(stud => stud._id === st._id)) {
                                                this.studentClass.students.push(st);
                                            }
                                        });
                                    }
                                },
                                err => {
                                    this.notifier.error('Error', res.response || err);
                                });
                    }
                }
            }, err => {
                this.notifier.error('Error', err);
            });
    }
}
