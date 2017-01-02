export class SchoolEvent {
    _id: string;
    title: string;
    description: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(title?: string, description?: string, createdBy?: string, createdAt?: Date, updatedAt?: Date) {
        this.title = title || '';
        this.description = description || '';
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
        this.createdBy = createdBy || '';
    }
}
