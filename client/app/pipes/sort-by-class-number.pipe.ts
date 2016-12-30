import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student';

@Pipe({ name: 'sortByClassNumber' })
export class SortByClassNumberPipe implements PipeTransform {
    transform(people: Student[]) {
        return people.sort((a, b) => {
            return a.classNumber - b.classNumber;
        });
    }
}
