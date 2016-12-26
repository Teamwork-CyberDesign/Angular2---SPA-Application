import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent {
    @Input() data: Student;
    private notifier: NotificationsService;

    constructor(notifier: NotificationsService) {
        this.data = new Student();
        this.notifier = notifier;
    }

    public get console() {
        return console;
    }

    private saveStudent() {
        console.log('TODO: save');
        this.notifier.success('Student saved!', 'Not really');
    }

    private addMark(mark, subject) {
        let markInfo = this.data.marks.filter(info => info.subject === subject)[0];
        markInfo.marks.push(+mark);
        this.notifier.success('Mark added successfully!', '');
    }
}
