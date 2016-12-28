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
        this._id = '';
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.password = '';
        this.token = '';
        this.role = '';
        this.imagePath = '';
    }

    public get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
