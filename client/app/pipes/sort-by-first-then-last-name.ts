import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({ name: 'sortByFirstThenByLastName' })
export class SortByFirstThenByLastNamePipe implements PipeTransform {
    transform(people: Person[]) {
        return people.sort((a, b) => {
            if (a.firstName === b.firstName) {
                if (a.lastName === b.lastName) {
                    return 0;
                } else if (a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 1;
                }
            } else if (a.firstName < b.firstName) {
                return -1;
            } else {
                return 1;
            }
        });
    }
}
