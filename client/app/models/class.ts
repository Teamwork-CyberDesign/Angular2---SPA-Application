import { Student } from './student';

export class Class {
    grade: string;
    subjects: string[];
    students: Student[];

    constructor() {
        this.grade = '';
        this.subjects = [];
        this.students = [];
    }
}
