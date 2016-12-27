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
    @Input() subject: string;
    // private revertData: Student;

    private notifier: NotificationsService;
    private studentService: StudentService;

    constructor(notifier: NotificationsService, studentService: StudentService) {
        this.data = new Student();
        this.notifier = notifier;
        this.studentService = studentService;
    }

    private saveStudent() {
        // TODO: get teacher subjects
        this.studentService.addMarksToStudent(this.data, this.subject)
            .subscribe(() => {
                this.notifier.success('Student saved!', 'Hopefully');
            });
    }

    private addMark(mark) {
        let markInfo = this.data.marks.filter(info => info.subject === this.subject)[0];
        markInfo.marks.push(+mark);
        this.notifier.success('Mark added successfully!', '');
    }

    private removeMark(mark) {
        let markInfo = this.data.marks.filter(info => info.subject === this.subject)[0];
        let index = markInfo.marks.indexOf(+mark);
        if (index > -1) {
            markInfo.marks.splice(index, 1);
            this.notifier.success('Mark removed successfully!', '');
        } else {
            this.notifier.alert('Student doesn\'t have selected mark!', '');
        }
    }
}
