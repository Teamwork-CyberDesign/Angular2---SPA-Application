import { Component, OnInit } from '@angular/core';
import { Class, Teacher } from '../../models';
import { ClassService } from '../../services/class.service';
import { AuthenticationService } from '../../services/authentication.service';
import { TeacherService } from '../../services/teacher.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'class-list',
    templateUrl: 'class-list.component.html'
})

export class ClassListComponent implements OnInit {
    private _currentSelection: Class;
    private classes: Class[];
    private teacher: Teacher;
    private teacherService: TeacherService;
    private auth: AuthenticationService;
    private classService: ClassService;
    private notifier: NotificationsService;

    constructor(classService: ClassService,
                auth: AuthenticationService,
                teacherService: TeacherService,
                notifier: NotificationsService) {
        this.currentSelection = new Class();
        this.classService = classService;
        this.teacher = new Teacher();
        this.teacherService = teacherService;
        this.auth = auth;
        this.notifier = notifier;
    }

    ngOnInit() {
        this.getClasses();
        this.getTeacher();
    }

    private getClasses(): void {
        this.classService.getClassesForCurrentUser()
            .subscribe(cl => {
                    if (!Array.isArray(cl) || cl.length === 0) {
                        let blankClass = new Class();
                        this.classes = [];
                        this._currentSelection = blankClass;
                    } else {
                        this.classes = cl;
                        this._currentSelection = cl[0];
                    }

                },
                (err) => {
                    this.notifier.error(err, err.message);
                });
    }

    private getTeacher(): void {
        let username = this.auth.getCurrentUser();
        this.teacherService.getTeacherByUser(username)
            .subscribe(
                (teacher) => {
                    this.teacher = teacher as Teacher;
                },
                (err) => {
                    this.notifier.error(err, err);
                });
    }

    public get currentSelection(): Class {
        return this._currentSelection;
    }

    public set currentSelection(cl: Class) {
        if (cl == null) {
            throw new Error('Current selection cannot be null!');
        }

        this._currentSelection = cl;
    }

    private showClassInfo(classNumber) {
        this.currentSelection = this.classes.filter(cl => cl.grade === classNumber)[0];
    }
}
