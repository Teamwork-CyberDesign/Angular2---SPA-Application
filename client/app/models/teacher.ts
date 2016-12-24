import { Person } from './person';

export class Teacher implements Person{
    _id: string;
    firstName: string;
    lastName: string;
    class: string;
    subjects: any[];
    students: any[];

}