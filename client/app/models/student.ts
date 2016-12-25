import { User } from './user';
import { MarkInfo } from './mark-info';

export class Student {
    user: User;
    classNumber: number;
    egn: number;
    marks: MarkInfo[];
}
