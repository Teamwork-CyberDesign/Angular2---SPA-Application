import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models';

@Pipe({
    name: 'sortByFirstThenByLastName'
})
export class SortByFirstThenByLastNamePipe implements PipeTransform {
    transform(people: Person[]) {
        if (!people) {
            return [];
        }

        return people.sort((a, b) => {
            let aFirst = a.firstName.toLowerCase();
            let aLast = a.lastName.toLowerCase();
            let bFirst = b.firstName.toLowerCase();
            let bLast = b.lastName.toLowerCase();

            if (aFirst === bFirst) {
                if (aLast === bLast) {
                    return 0;
                } else if (aLast < bLast) {
                    return -1;
                } else {
                    return 1;
                }
            } else if (aFirst < bFirst) {
                return -1;
            } else {
                return 1;
            }
        });
    }
}
