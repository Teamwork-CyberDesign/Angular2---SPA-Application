import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Class, Teacher } from '../../models';
import { SubjectsAsString } from '../../enums/subject';
import { TeacherService } from '../../services/teacher.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: 'create-teacher.component.html'
})
export class CreateTeacherComponent {
    private teacherData: User[];
    private teacherService: TeacherService;
    private userService: UserService;
    private notifier: NotificationsService;
    private classService: ClassService;
    private model: Teacher;
    private classes: Class[];
    private subjects: string[];
    private loading: boolean = true;

    constructor(classService: ClassService,
                teacherService: TeacherService,
                userService: UserService,
                notifier: NotificationsService) {
        this.classService = classService;
        this.teacherService = teacherService;
        this.userService = userService;
        this.notifier = notifier;
        this.subjects = SubjectsAsString;
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
        this.userService.getAllUsers()
            .subscribe(
                (teachers) => {
                    this.teacherData = teachers as User[];
                },
                (err) => {
                    this.notifier.error('Error', err.message);
                });
    }

    createTeacher() {
        if (!this.model.user.username || this.model.user.username.length < 1) {
            this.notifier.error('Error', 'Please select a teacher from the dropdown!');
            return;
        }

        if (!this.model.subject) {
            this.notifier.error('Error', 'Teacher subject is required!');
            return;
        }

        if (!this.model.classes || this.model.classes.length < 1) {
            this.notifier.error('Error', 'Teacher classes are required!');
            return;
        }

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
        this.model.subject = subject;
        this.model.classes = [];
    }
}
