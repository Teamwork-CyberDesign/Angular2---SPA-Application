import { Person } from './person';

export class Student implements Person {
    id: string;
    firstName: string;
    lastName: string;
    class: string;
    subjects: any[];
    teachers: any[];
}
