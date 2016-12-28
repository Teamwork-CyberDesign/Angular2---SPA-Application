import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Student, Class } from '../../models';
import { StudentService } from '../../services/student.service';
import { SubjectsAsString } from '../../enums/subject';

@Component({
    templateUrl: 'create-class.component.html'
})

export class AddClassComponent implements OnInit {
    private model: Class;
    private subjects: string[] = SubjectsAsString;
    private studentData: Student[];

    constructor(private router: Router,
                private classService: ClassService,
                private studentService: StudentService,
                private notifier: NotificationsService) {
        this.model = new Class();
    }

    ngOnInit() {
        this.getStudents();
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

    getStudents(): void {
        this.studentService.getAllStudents()
            .subscribe(
                students => {
                    this.studentData = students as Student[];
                },
                err => {
                    this.notifier.error('Error', err);
                    console.log(err);
                });
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

    addStudent(studentId: string): void {
        let student = this.studentData.filter(st => st._id === studentId)[0];
        if (student
            && this.model.students.indexOf(student) < 0) {

            this.model.students.push(student);
        }
    }

    removeStudent(studentId: string): void {
        let student = this.studentData.filter(st => st._id === studentId)[0];
        let index = this.model.students.indexOf(student);
        if (student
            && index > -1) {

            this.model.students.splice(index, 1);
        }
    }

}
