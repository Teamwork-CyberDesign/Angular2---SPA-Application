import { Component, Input } from '@angular/core';
import { Student } from '../../models';
import { NotificationsService } from 'angular2-notifications';
import { StudentService } from '../../services/student.service';
import { Subject } from '../../enums/subject';
import { MarkInfo } from '../../models/mark-info';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent {
    @Input() data: Student;
    @Input() subject: Subject;
    // private revertData: Student;

    private notifier: NotificationsService;
    private studentService: StudentService;

    constructor(notifier: NotificationsService, studentService: StudentService) {
        this.data = new Student();
        this.notifier = notifier;
        this.studentService = studentService;
    }

    private saveStudent(): void {
        this.studentService.addMarksToStudent(this.data, this.subject)
            .subscribe(() => {
                this.notifier.success('Student saved!', 'Hopefully');
            });
    }

    private addMark(mark): void {
        let markInfo = this.data.marks.filter(info => info.subject === this.subject)[0];

        if (!markInfo) {
            markInfo = new MarkInfo();
            markInfo.subject = this.subject;
            this.data.marks.push(markInfo);
            markInfo = this.data.marks[this.data.marks.length - 1];
        }

        markInfo.marks.push(+mark);
        this.notifier.success('Mark added successfully!', '');
    }

    private removeMark(mark): void {
        let markInfo = this.data.marks.filter(info => info.subject === this.subject)[0];

        if (!markInfo) {
            return;
        }

        let index = markInfo.marks.indexOf(+mark);
        if (index > -1) {
            markInfo.marks.splice(index, 1);
            this.notifier.success('Mark removed successfully!', '');
        } else {
            this.notifier.alert('Student doesn\'t have selected mark!', '');
        }
    }
}
