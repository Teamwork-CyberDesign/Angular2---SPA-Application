import { User } from './user';
import { Subject } from '../enums/subject';
import { Class } from './class';

export class Teacher {
    user: User;
    subject: string;
    classes: Class[];
    username: string;

    constructor() {
        this.subject = Subject[Subject.None];
        this.classes = [];
        this.username = '';
        this.user = new User();
    }
}
