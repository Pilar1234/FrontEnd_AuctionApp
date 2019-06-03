import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {biggerThan1500Validator, lessThanZeroValidator} from './custom-validator';
import {AuctionModel} from './auction.model';

@Injectable()
export class AuctionFormValidationService {
    private auctionForm: FormGroup;
    private auctionNameValidators = [Validators.required, Validators.minLength(10), Validators.maxLength(15)];
    private auctionPriceValidators = [Validators.required, lessThanZeroValidator, biggerThan1500Validator];
    private auctionDescriptionValidators = [Validators.required];
    private auctionType = [Validators.required];
    private auctionEndDate = [Validators.required, Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')];
    private auctionImagePath = [Validators.required];

    constructor(private fb: FormBuilder) {
    }

    initForm(auction: AuctionModel) {
        this.auctionForm = this.fb.group({
            auctionName: [auction.auctionName, this.auctionNameValidators],
            auctionStartPrice: [auction.auctionStartPrice, this.auctionPriceValidators],
            auctionDescription: [auction.auctionDescription, this.auctionDescriptionValidators],
            // auctionType: ['', this.auctionType],
            auctionEndDate: [auction.auctionEndDate, this.auctionEndDate],
            // auctionImagePath: ['', this.auctionImagePath],
        });
        return this.auctionForm;
    }
}
