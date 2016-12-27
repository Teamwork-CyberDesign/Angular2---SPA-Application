import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../models/class';
import { Student } from '../../models/student';
import { Teacher } from '../../models/teacher';
import { AuthenticationService } from '../../services/authentication.service';
import { TeacherService } from '../../services/teacher.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'single-class',
    templateUrl: 'single-class.component.html'
})

export class SingleClassComponent implements OnInit {
    @Input() data: Class;
    private currentStudent: Student;
    private currentTeacher: Teacher;
    private teacherService: TeacherService;
    private auth: AuthenticationService;
    private notifier: NotificationsService;

    constructor(teacherService: TeacherService,
                auth: AuthenticationService,
                notifier: NotificationsService) {
        this.teacherService = teacherService;
        this.notifier = notifier;
        this.auth = auth;
        this.currentStudent = new Student();
        this.currentTeacher = new Teacher();
    }

    onEditClick(student: Student) {
        this.currentStudent = student;
    }

    ngOnInit() {
        let username = this.auth.getCurrentUser();
        this.teacherService.getTeacherByUser(username)
            .subscribe(
                (teacher) => {
                    this.currentTeacher = teacher as Teacher;
                },
                (err) => {
                    this.notifier.error(err, err);
                });
    }
}
