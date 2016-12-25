import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent implements OnInit {
    @Input() data: Student;

    constructor() {
        this.data = new Student();
    }

    ngOnInit() {
    }

    public get console() {
        return console;
    }
}
