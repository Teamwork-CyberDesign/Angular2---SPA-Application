import { Person } from './person';

export class Student implements Person {
    _id: string;
    firstName: string;
    lastName: string;
    class: string;
    subjects: any[];
    teachers: any[];
}
