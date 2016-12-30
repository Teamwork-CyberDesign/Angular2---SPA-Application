import { Component, Input, AfterContentInit } from '@angular/core';
import { Class } from '../../models';

@Component({
    templateUrl: 'create-student-modal.component.html',
    selector: 'create-student-modal'
})

export class CreateStudentModalComponent implements AfterContentInit {
    @Input() studentClass: Class;
    private buttonText: string;

    constructor() {
    }

    ngAfterContentInit() {
        this.buttonText = this.studentClass ? 'Add new student to class' : 'Register a new student';
    }
}
