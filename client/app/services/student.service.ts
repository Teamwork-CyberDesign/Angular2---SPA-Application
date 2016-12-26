import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Student } from '../models/student';

@Injectable()
export class StudentService {
    private studentUrl = '/api/student';
    private requester: AjaxRequesterService<Student>;
    private auth: AuthenticationService;

    constructor(requester: AjaxRequesterService<Student>, auth: AuthenticationService) {
        this.requester = requester;
        this.auth = auth;
    }

    createStudent(student: Student): Observable<Student> {
        console.log(student);
        return this.requester.post(this.studentUrl, student, true);
    }

    addMarksToStudent(student: Student, subject: string): Observable<Student> {
        let marks = student.marks.filter(info => info.subject === subject)[0].marks;

        return this.requester.put(this.studentUrl + `/add-marks`, {
            marks,
            username: student.user.username,
            subject
        }, true);
    }
}
