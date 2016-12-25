import { Component, Input } from '@angular/core';
import { Class } from '../../models/class';
import { Student } from '../../models/student';

@Component({
    selector: 'single-class',
    templateUrl: 'single-class.component.html'
})

export class SingleClassComponent {
    @Input() data: Class;
    private currentStudent: Student;

    constructor() {
        this.currentStudent = new Student();
    }

    onEditClick(student: Student) {
        this.currentStudent = student;
    }
}
