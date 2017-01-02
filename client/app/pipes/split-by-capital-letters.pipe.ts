
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitByCapitalLetters',
    pure: false
})

export class SplitByCapitalLettersPipe implements PipeTransform {
    transform(s: string) {
        return s.replace(/([A-Z])/g, ' $1').trim();
    }
}
