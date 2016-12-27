import { User } from './user';

export class Teacher {
    user: User;
    subject: string;
    classes: string[];

    constructor() {
        this.subject = '';
        this.classes = [];
        this.user = new User();
    }
}
