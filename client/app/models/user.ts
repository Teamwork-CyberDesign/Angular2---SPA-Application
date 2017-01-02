import { Person } from './person';

export class User implements Person {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
    email: string;
    token: string;
    role: string;
    imagePath: string;

    constructor() {
        this._id = '';
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.token = '';
        this.role = '';
        this.imagePath = '';
    }

    public get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
