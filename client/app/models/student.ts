import { User } from './user';
import { MarkInfo } from './mark-info';

export class Student {
    _id: string;
    user: User;
    classNumber: number;
    egn: number;
    marks: MarkInfo[];
    modified: boolean;

    constructor() {
        this.user = new User();
        this.classNumber = 0;
        this.egn = 0;
        this.marks = [];
        this.modified = false;
    }
}
