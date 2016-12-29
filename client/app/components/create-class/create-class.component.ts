import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models';
import { StudentService } from '../../services/student.service';
import { SubjectsAsString } from '../../enums/subject';
import { NotificationsService } from 'angular2-notifications';

@Component({
    templateUrl: 'create-class.component.html'
})

export class AddClassComponent {
    private model: Class;
    private subjects: string[] = SubjectsAsString;
    private studentUrl = 'api/student?user=:user';

    constructor(private router: Router,
                private classService: ClassService,
                private studentService: StudentService,
                private notifier: NotificationsService) {
        this.model = new Class();
    }

    createClass(): void {
        if (this.model.students.length === 0) {
            this.notifier.error('Error', 'Class must contain students!');
            return;
        }

        if (this.model.subjects.length === 0) {
            this.notifier.error('Error', 'Class must contain subjects!');
            return;
        }

        this.classService.createClass(this.model)
            .subscribe(
                data => {
                    if (data.errmsg && data.errmsg.indexOf('duplicate') > -1) {
                        this.notifier.error('Error', 'Class already exists!');
                    } else if (data.errmsg) {
                        this.notifier.error('Error', data.errmsg);
                    } else {
                        this.notifier.success('Success', 'Class has been successfully created!');
                        this.router.navigate(['/']);
                    }
                },
                error => {
                    this.notifier.error('Error', error);
                    console.log(error);
                }
            );
    }

    addSubject(subject: string): void {
        if (subject
            && subject.length > 0
            && this.subjects.indexOf(subject) > -1
            && this.model.subjects.indexOf(subject) < 0) {

            this.model.subjects.push(subject);
        }
    }

    removeSubject(subject: string): void {
        let index = this.model.subjects.indexOf(subject);
        if (subject
            && subject.length > 0
            && index > -1) {

            this.model.subjects.splice(index, 1);
        }
    }

    addStudent(username: string): void {
        if (username === '') {
            return;
        }

        this.studentService.getStudentByUsername(username)
            .subscribe(
                (student) => {
                    if (!student) {
                        this.notifier.error('Student not found!', 'Please select a student from the dropdown');
                    } else if (student.errmsg) {
                        this.notifier.error('Error', student.errmsg);
                    } else {
                        let modelStudent = this.model.students.filter(st => st.user.username === username)[0];

                        if (!modelStudent) {
                            this.model.students.push(student);
                        }
                    }
                },
                (err) => {
                    this.notifier.error('Error', err);
                });
    }

    removeStudent(username: string): void {
        let student = this.model.students.filter(st => st.user.username === username)[0];
        let index = this.model.students.indexOf(student);
        if (student
            && index > -1) {
            this.model.students.splice(index, 1);
        }
    }

}
