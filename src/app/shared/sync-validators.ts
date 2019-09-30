export class SyncValidators {
    static getValidationMessage(validator: string, validatorValue?: any) {
        const messages = {
            required: 'This field is required',
            email: 'Wrong pattern, try this one: example@gmail.com'
        };
        return messages[validator];
    }
}
