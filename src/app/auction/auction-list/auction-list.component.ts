import {Component, OnInit} from '@angular/core';
import {AuctionService} from '../auction-shared/auction.service';
import {AuctionModel} from '../auction-shared/auction.model';

@Component({
    selector: 'app-auction-list',
    templateUrl: './auction-list.component.html',
    styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
    auctions: AuctionModel[] = [];

    constructor(private auctionService: AuctionService) {
    }

    ngOnInit() {
        this.auctions = this.auctionService.auctions;
    }

//    @TODO: nie wyświetla danych aukcji
}
