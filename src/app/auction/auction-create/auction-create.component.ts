import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuctionService } from '../auction-shared/auction.service';
import { ToastrService } from 'ngx-toastr';
import { biggerThan1500Validator, lessThanZeroValidator } from '../auction-shared/custom-validator';

@Component({
    selector: 'app-auction-create',
    templateUrl: './auction-create.component.html',
    styleUrls: ['./auction-create.component.css']
})
export class AuctionCreateComponent implements OnInit {
    private auctionForm: FormGroup;

    private auctionNameValidators: Validators[] = [Validators.required, Validators.minLength(10), Validators.maxLength(15)];
    private auctionPriceValidators: Validators[] = [Validators.required, lessThanZeroValidator, biggerThan1500Validator];
    private auctionDescriptionValidators: Validators[] = [Validators.required];
    private auctionType: Validators[] = [Validators.required];
    private auctionEndDate: Validators[] = [Validators.required, Validators.pattern('[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])')];
    private auctionImagePath: Validators[] = [Validators.required];

    constructor(private fb: FormBuilder,
                private toastr: ToastrService,
                private auctionService: AuctionService) {
    }

    ngOnInit() {
        this.auctionForm = this.fb.group({
            auctionName: ['', this.auctionNameValidators],
            auctionStartPrice: ['', this.auctionPriceValidators],
            auctionDescription: ['', this.auctionDescriptionValidators],
            // auctionType: ['', this.auctionType],
            auctionEndDate: ['', this.auctionEndDate],
            // auctionImagePath: ['', this.auctionImagePath],
        });
        // this.initForm();
    }

    clearInputs() {
        this.auctionForm.reset();
    }

    onSubmit() {
        console.log(this.auctionForm);
        if (this.auctionForm.get('auctionPrice').invalid) {
            this.toastr.error('Looo panie...nie wiemy co sie stało,ale pracujemy nad tym :)');
            return false;
        } else {
            this.toastr.success('Aukcja pomyślnie dodana');
        }
        this.auctionService.addAuction(this.auctionForm.value).subscribe(
            (response) => console.log(response)
        );
    }

}
