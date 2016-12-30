import { Pipe, PipeTransform } from '@angular/core';
import { MarkInfo } from '../models/mark-info';

@Pipe({ name: 'filterByTeacherSubject', pure: false })
export class FilterByTeacherSubjectPipe implements PipeTransform {
    transform(markInfos: MarkInfo[], subject: string) {
        return markInfos.filter(info => {
            return info.subject === subject;
        });
    }
}
