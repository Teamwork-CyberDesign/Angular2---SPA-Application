export class User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    fullName: string;
    password: string;
    token: string;
    role: string;
    imagePath: string;

    constructor(){

    this.fullName = this.firstName + " " + this.lastName;
    }
}
