import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'average', pure: false })
export class AveragePipe implements PipeTransform {
    transform(numbers: number[]) {
        if (numbers.length === 0) {
            return 0;
        }

        let sum = numbers.reduce((a, b) => a + b);
        return (sum / numbers.length).toFixed(2);
    }
}
