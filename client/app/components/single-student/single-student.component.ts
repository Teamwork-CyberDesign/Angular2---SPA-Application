import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';
import { NotificationsService } from 'angular2-notifications';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent {
    @Input() data: Student;
    private notifier: NotificationsService;
    private studentService: StudentService;

    constructor(notifier: NotificationsService, studentService: StudentService) {
        this.data = new Student();
        this.notifier = notifier;
        this.studentService = studentService;
    }

    private saveStudent() {
        // TODO: get teacher subjects
        this.studentService.addMarksToStudent(this.data, 'bio')
            .subscribe(() => {
                this.notifier.success('Student saved!', 'Hopefully');
            });
    }

    private addMark(mark, subject) {
        let markInfo = this.data.marks.filter(info => info.subject === subject)[0];
        markInfo.marks.push(+mark);
        this.notifier.success('Mark added successfully!', '');
    }
}
