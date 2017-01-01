import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../models';
import { StudentService } from '../../services/student.service';
import { NotificationsService } from 'angular2-notifications';
import { MarkType } from '../../enums/mark-type';

@Component({
    selector: 'student-marks',
    templateUrl: 'student-marks.component.html'
})

export class StudentMarksComponent implements OnInit {
    @Input() username: string;
    private MarkType = MarkType;
    private model: Student;

    constructor(private studentService: StudentService,
                private notifier: NotificationsService) {
        this.model = new Student();
    }

    ngOnInit() {
        this.studentService.getStudentByUsername(this.username)
            .subscribe(res => {
                if (res.err || res.errmsg) {
                    this.notifier.error('Error', res.err || res.errmsg);
                } else {
                    this.model = res;
                }
            });
    }

}

