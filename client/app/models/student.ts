import { User } from './user';
import { MarkInfo } from './mark-info';

export class Student {
    user: User;
    classNumber: number;
    egn: number;
    marks: MarkInfo[];

    constructor() {
        this.user = new User();
        this.classNumber = 0;
        this.egn = 0;
        this.marks = [];
    }
}
