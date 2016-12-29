import { Subject } from '../enums/subject';
import { MarkType } from '../enums/mark-type';
import { Mark } from './mark';

export class MarkInfo {
    subject: Subject;
    marks: Mark[];

    constructor() {
        this.marks = [];
        this.subject = Subject.None;
    }
}
