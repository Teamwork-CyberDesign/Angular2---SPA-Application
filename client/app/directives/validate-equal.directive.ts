import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor(@Attribute('validateEqual') public validateEqual: string,
                @Attribute('reverse') public reverse: string) {
    }

    private get isReverse() {
        if (!this.reverse) {
            return false;
        }

        return this.reverse === 'true';
    }

    validate(c: AbstractControl): { [key: string]: any } {
        let thisValue = c.value;
        let otherValue = c.root.get(this.validateEqual);

        // value not equal
        if (otherValue && thisValue !== otherValue.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }

        // value equal and reverse
        if (otherValue && thisValue === otherValue.value && this.isReverse) {
            delete otherValue.errors['validateEqual'];
            if (!Object.keys(otherValue.errors).length) {
                otherValue.setErrors(null);
            }
        }

        // value not equal and reverse
        if (otherValue && thisValue !== otherValue.value && this.isReverse) {
            otherValue.setErrors({ validateEqual: false });
        }

        return null;
    }
}
