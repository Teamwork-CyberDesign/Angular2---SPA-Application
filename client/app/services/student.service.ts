import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AjaxRequesterService } from './requester.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Student } from '../models/student';
import { Subject } from '../enums/subject';

@Injectable()
export class StudentService {
    private studentUrl = '/api/student';
    private requester: AjaxRequesterService<Student>;
    private auth: AuthenticationService;

    constructor(requester: AjaxRequesterService<Student>, auth: AuthenticationService) {
        this.requester = requester;
        this.auth = auth;
    }

    createStudent(student: Student): Observable<any> {
        return this.requester.post(this.studentUrl, student, true);
    }

    addMarksToStudent(student: Student, subject: string): Observable<any> {
        let marks = student.marks.filter(info => info.subject === subject)[0].marks;
        return this.requester.put(this.studentUrl + `/add-marks`, {
            marks,
            username: student.user.username,
            subject
        }, true);
    }

    addStudentToClass(student: Student, grade: string): Observable<any> {
        let studentId = student._id;
        return this.requester.put('/api/class/add-student', { grade: grade, students: [studentId] }, true);
    }

    getAllStudents(): Observable<Student[]> {
        return this.requester.get(this.studentUrl);
    }

    getStudentByUsername(username: string): Observable<any> {
        return this.requester.get(`${this.studentUrl}/${username}`);
    }
}
