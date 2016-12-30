import { Component, Input } from '@angular/core';
import { Class, Student, Teacher } from '../../models';

@Component({
    selector: 'single-class',
    templateUrl: 'single-class.component.html',
    styles: ['.modified { color: red; font-style: italic; }']
})

export class SingleClassComponent {
    @Input() data: Class;
    @Input() teacher: Teacher;

    private currentStudent: Student;

    constructor() {
        this.currentStudent = new Student();
    }

    onEditClick(student: Student) {
        this.currentStudent = student;
    }
}
