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
        let otherControl = c.root.get(this.validateEqual);

        // value not equal
        if (otherControl && thisValue !== otherControl.value && !this.isReverse) {
            return {
                validateEqual: false
            };
        }

        // value equal and reverse
        if (otherControl && thisValue === otherControl.value && this.isReverse) {
            delete otherControl.errors['validateEqual'];
            if (!Object.keys(otherControl.errors).length) {
                otherControl.setErrors(null);
            }
        }

        // value not equal and reverse
        if (otherControl && thisValue !== otherControl.value && this.isReverse) {
            otherControl.setErrors({ validateEqual: false });
        }

        return null;
    }
}
