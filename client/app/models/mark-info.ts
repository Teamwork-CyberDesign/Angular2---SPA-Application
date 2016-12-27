import { Subject } from '../enums/subject';

export class MarkInfo {
    subject: Subject;
    marks: number[];

    constructor() {
        this.marks = [];
        this.subject = Subject.None;
    }
}
