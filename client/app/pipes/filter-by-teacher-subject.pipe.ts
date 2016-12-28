import { Pipe, PipeTransform } from '@angular/core';
import { MarkInfo } from '../models/mark-info';
import { Subject } from '../enums/subject';

@Pipe({ name: 'filterByTeacherSubject', pure: false })
export class FilterByTeacherSubjectPipe implements PipeTransform {
    transform(markInfos: MarkInfo[], subject: Subject) {
        return markInfos.filter(info => {
            return info.subject === subject;
        });
    }
}
