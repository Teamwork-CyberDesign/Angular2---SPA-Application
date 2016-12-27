import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Class, Teacher } from '../../models';
import { Subject } from '../../enums/subject';
import { TeacherService } from '../../services/teacher.service';

@Component({
    templateUrl: 'create-teacher.component.html'
})
export class CreateTeacherComponent {
    private teacherService: TeacherService;
    private notifier: NotificationsService;
    private classService: ClassService;
    private model: Teacher;
    private classes: Class[];
    private subjects: string[];
    private loading: boolean = true;

    constructor(classService: ClassService,
                teacherService: TeacherService,
                notifier: NotificationsService) {
        this.classService = classService;
        this.notifier = notifier;
        this.teacherService = teacherService;
        this.subjects = Object.keys(Subject)
            .map(s => Subject[s])
            .filter(v => typeof v === 'string');

        this.model = new Teacher();
        this.classes = [];
    }

    ngOnInit() {
        this.classService.getClasses()
            .subscribe(
                (classes) => {
                    this.classes = classes;
                    this.loading = false;
                },
                (err) => {
                    this.notifier.error('Error', err.message);
                });
    }

    createTeacher() {
        this.teacherService.createTeacher(this.model)
            .subscribe(
                (result) => {
                    if (result.errmsg && result.errmsg.indexOf('duplicate') > -1) {
                        this.notifier.error('Error', 'Teacher already exists!');
                    } else if (result.errmsg) {
                        this.notifier.error('Error', result.errmsg);
                    } else {
                        this.notifier.success('Teacher successfully created!', '');
                    }
                },
                (err) => {
                    this.notifier.error('Error', err);
                });
    }

    toggleClass(classId) {
        let index = this.model.classes.indexOf(classId);
        if (index > -1) {
            this.model.classes.splice(index, 1);
        } else {
            this.model.classes.push(classId);
        }
    }

    handleSelectChange(subject: string) {
        this.model.subject = Subject[subject];
    }
}
