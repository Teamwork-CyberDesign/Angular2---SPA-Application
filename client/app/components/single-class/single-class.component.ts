import { Component, Input } from '@angular/core';
import { Class, Student } from '../../models';

@Component({
    selector: 'single-class',
    templateUrl: 'single-class.component.html'
})

export class SingleClassComponent {
    @Input() data: Class;
    @Input() subject: string;

    private currentStudent: Student;

    constructor() {
        this.currentStudent = new Student();
    }

    onEditClick(student: Student) {
        this.currentStudent = student;
    }
}
