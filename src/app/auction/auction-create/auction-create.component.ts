import {Component, OnInit} from '@angular/core';
import {AuctionService} from '../auction-shared/auction.service';
import {AuctionFormValidationService} from '../auction-shared/auction-form-validation.service';
import {FormGroup} from '@angular/forms';
import {AuctionModel} from '../auction-shared/auction.model';

@Component({
    selector: 'app-auction-create',
    templateUrl: './auction-create.component.html',
    styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
    auctionForm: FormGroup;
    private inputsArray: any[];
    private auction = {} as AuctionModel;

    constructor(private auctionFormValidation: AuctionFormValidationService,
                private auctionService: AuctionService) {
    }

    ngOnInit() {
        this.inputsArray = [
            {field: 'auctionName', header: 'Auction Name'},
            {field: 'auctionStartPrice', header: 'Starting Price'},
            {field: 'auctionPresentPrice', header: 'Present Price'},
            {field: 'auctionDescription', header: 'Description'},
            {field: 'auctionImagePath', header: 'Image'},
            {field: 'auctionType', header: 'Auction Type'},
            {field: 'auctionEndDate', header: 'End Date'},
            {field: 'auctionStartDate', header: 'Start Date'},
        ];
        this.auctionForm = this.auctionFormValidation.initForm(this.auction);
    }

    clearInputs() {
        this.auctionForm.reset();
    }

    onSubmit() {
        this.auctionService.addAuction(this.auctionForm.value).subscribe(
            (response) => console.log(response)
        );
    }

}
