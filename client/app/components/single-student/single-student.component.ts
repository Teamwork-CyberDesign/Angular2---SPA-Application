import { Component, Input } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { StudentService } from '../../services/student.service';
import { MarkType, MarkTypesAsString } from '../../enums/mark-type';
import { Student, Mark, Teacher } from '../../models';

@Component({
    selector: 'single-student',
    templateUrl: 'single-student.component.html'
})

export class SingleStudentComponent {
    @Input() data: Student;
    @Input() teacher: Teacher;

    private notifier: NotificationsService;
    private studentService: StudentService;
    private markTypesAsString: string[] = MarkTypesAsString;
    private MarkType = MarkType;

    constructor(notifier: NotificationsService, studentService: StudentService) {
        this.data = new Student();
        this.notifier = notifier;
        this.studentService = studentService;
    }

    private saveStudent(): void {
        this.studentService.addMarksToStudent(this.data, this.teacher.subject)
            .subscribe(() => {
                this.notifier.success('Success', 'Student saved!');
            });
    }

    private addMark(markValue: string, markType: string): void {
        let markTypeEnum = MarkType[markType];
        let markInfo = this.data.marks.filter(info => info.subject === this.teacher.subject)[0];

        if (!markInfo) {
            markInfo = { subject: this.teacher.subject, marks: [] };
            this.data.marks.push(markInfo);
            markInfo = this.data.marks.filter(info => info.subject === this.teacher.subject)[0];
        }

        let studentMark = new Mark(new Date(), this.teacher.user.firstName + ' ' + this.teacher.user.lastName, +markValue, markTypeEnum);
        markInfo.marks.push(studentMark);
        this.notifier.success('Mark added successfully!', '');
        console.log(this.data);
        console.log(this.teacher);
    }

    private removeMark(mark): void {
        let markInfo = this.data.marks.filter(info => info.subject === this.teacher.subject)[0];

        let index = markInfo.marks.indexOf(mark);
        if (index > -1) {
            markInfo.marks.splice(index, 1);
        }
    }
}
