import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent {
    @Input() data: Student;

    constructor() {
        this.data = new Student();
    }

    public get console() {
        return console;
    }

    private saveStudent() {
        console.log("save");
    }

    private addMark(mark, subject) {
        let markInfo = this.data.marks.filter(info => info.subject === subject)[0];
        markInfo.marks.push(+mark);
    }
}
