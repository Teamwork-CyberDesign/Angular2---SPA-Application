import { MarkType } from '../enums/mark-type';
export class Mark {
    date: string;
    teacher: string;
    value: number;
    markType: MarkType;

    constructor(date, teacher, value, type) {
        this.date = date || '';
        this.teacher = teacher || '';
        this.value = value || 0;
        this.markType = type || -1;
    }
}
