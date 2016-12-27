export class User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    token: string;
    role: string;
    imagePath: string;

    constructor() {
    }

    public get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
