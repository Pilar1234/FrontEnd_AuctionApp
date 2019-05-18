import {FormControl} from '@angular/forms';

export function lessThanZeroValidator(control: FormControl) {
    if (control.value < 0) {
        return {lessThanZero: true};
    }
    return null;
}

export function biggerThan1500Validator(control: FormControl) {
    if (control.value >= 1500) {
        return {biggerThan1500: true};
    }
    return null;
}
