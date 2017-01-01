import { Pipe, PipeTransform } from '@angular/core';
import { Mark } from '../models/mark';

@Pipe({
    name: 'filterMarks',
    pure: false
})

export class FilterMarksPipe implements PipeTransform {
    transform(marks: Mark[]) {
        return marks.map(mark => mark.value);
    }
}
