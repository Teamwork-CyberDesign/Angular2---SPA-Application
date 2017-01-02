import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({ name: 'sortByFirstName' })
export class SortByFirstNamePipe implements PipeTransform {
    transform(people: Person[]) {
        return people.sort((a, b) => {
            if (a.firstName === b.firstName) {
                return 0;
            } else if (a.firstName < b.firstName) {
                return -1;
            } else {
                return 1;
            }
        });
    }
}
