import { Component, OnInit } from '@angular/core';
import { Class, Student } from '../../models';
import { ClassService } from '../../services/class.service';
import { StudentService } from '../../services/student.service';
import { animateFactory } from 'ng2-animate';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations: [animateFactory(1000, 200, 'ease-in')]
})
export class HomeComponent implements OnInit {
    private title: string;
    private classes: Class[];
    private students: Student[];
    private classService: ClassService;
    private studentService: StudentService;

    constructor(classService: ClassService,
                studentService: StudentService) {
        this.title = 'School administrative software';
        this.classService = classService;
        this.studentService = studentService;
    };

    ngOnInit() {
        this.getClasses();
        this.getStudents();
    }

    private getClasses(): void {
        this.classService.getClasses()
            .subscribe(cl => {
                    this.classes = cl;

                },
                (err) => {
                    console.log(err);
                });
    }

    private getStudents(): void {
        this.studentService.getAllStudents()
            .subscribe(st => {
                    this.students = st;
                },
                (err) => {
                    console.log(err);
                });
    }
}
