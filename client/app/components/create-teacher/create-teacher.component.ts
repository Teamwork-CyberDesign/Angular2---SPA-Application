import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ClassService } from '../../services/class.service';
import { Teacher } from '../../models/teacher';

@Component({
    templateUrl: 'create-teacher.component.html'
})
export class CreateTeacherComponent {
    private model: Teacher;
    private classes: string[];

    constructor(private classService: ClassService,
                private notifier: NotificationsService) {
        this.model = new Teacher();
        this.classes = [];
    }

    ngOnInit() {
        this.classService.getClasses()
            .subscribe(
                (classes) => {
                    classes.forEach(cl => {
                        this.classes.push(cl.grade);
                    });
                },
                (err) => {
                    this.notifier.error('Error', err.message);
                });
    }

    createTeacher() {
        console.log(this.model);
    }
}
