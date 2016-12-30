import { Student } from './student';

export class Class {
    _id: string;
    grade: string;
    subjects: string[];
    students: Student[];

    constructor() {
        this.grade = '';
        this.subjects = [];
        this.students = [];
    }
}
