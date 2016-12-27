import { User } from './user';
import { Subject } from '../enums/subject';

export class Teacher {
    user: User;
    subject: Subject;
    classes: string[];

    constructor() {
        this.subject = Subject.None;
        this.classes = [];
        this.user = new User();
    }
}
