import { Subject } from '../enums/subject';
import { Mark } from './mark';

export class MarkInfo {
    subject: string;
    marks: Mark[];

    constructor() {
        this.marks = [];
        this.subject = Subject[Subject.None];
    }
}
