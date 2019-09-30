import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SyncValidators} from '../sync-validators';

@Component({
    selector: 'app-error-message',
    templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
    @Input() control: FormGroup | FormControl;

    get errorMessage() {
        for (const key in this.control.errors) {
            if (this.control.errors.hasOwnProperty(key) && this.control.touched) {
                return SyncValidators.getValidationMessage(key, this.control.errors[key]);
            }
        }
        return null;
    }

}
