import { Pipe, PipeTransform } from '@angular/core';
import { Class } from '../models/class';
import { Subject } from '../enums/subject';

@Pipe({
    name: 'filterClassBySubject',
    pure: false
})

export class FilterClassBySubject implements PipeTransform {
    transform(classes: Class[], subject: string) {
        return classes.filter(cl => {
            return cl.subjects.some(el => el.toLowerCase() === subject.toLowerCase());
        });
    }
}
