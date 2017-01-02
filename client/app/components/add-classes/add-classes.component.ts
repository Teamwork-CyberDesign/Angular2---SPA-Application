import { Component } from '@angular/core';
import { Teacher } from '../../models';
import { ClassService } from '../../services/class.service';
import { NotificationsService } from 'angular2-notifications';
import { TeacherService } from '../../services/teacher.service';

@Component({
    selector: 'add-classes',
    templateUrl: 'add-classes.component.html'
})

export class AddClassesComponent {
    private teacherUrl = '/api/teacher?user=:user';
    private classService: ClassService;
    private teacherService: TeacherService;
    private notifier: NotificationsService;
    private classesForTeacher;
    private model: Teacher;

    constructor(classService: ClassService,
                teacherService: TeacherService,
                notifier: NotificationsService) {
        this.classService = classService;
        this.teacherService = teacherService;
        this.notifier = notifier;
        this.model = new Teacher();
    }

    toggleClass(classId) {
        if (this.model.classes.some(cl => cl === classId || cl._id === classId)) {
            let index = this.findIndexByKeyValue(this.model.classes, '_id', classId);
            this.model.classes.splice(index, 1);
        } else {
            this.model.classes.push(classId);
        }
    }

    addClasses() {
        if (!this.model.username || this.model.username.length < 1) {
            this.notifier.error('Error', 'Please select a teacher from the dropdown!');
            return;
        }

        if (!this.model.classes || this.model.classes.length < 1) {
            this.notifier.error('Error', 'Teacher classes are required!');
            return;
        }

        this.teacherService.addClassesToTeacher(this.model)
            .subscribe(
                res => {
                    if (res.err || res.errmsg) {
                        this.notifier.error('Error', res.err || res.errmsg);
                    } else {
                        this.notifier.success('Success', 'Teacher saved!');
                    }
                },
                err => {
                    this.notifier.error('Error', err);
                });
    }

    private getClasses(): void {
        this.classService.getClassesWithSubject(this.model.subject)
            .subscribe(
                res => {
                    this.classesForTeacher = res;
                },
                err => {
                    this.notifier.error('Error', err);
                });
    }

    // TODO: extract
    private findIndexByKeyValue(arraytosearch: any[], key: string, value: any) {
        if (!arraytosearch || arraytosearch.length < 0) {
            return -1;
        }

        for (let i = 0; i < arraytosearch.length; i++) {
            if (arraytosearch[i][key] === value) {
                return i;
            }
        }

        return -1;
    }
}
