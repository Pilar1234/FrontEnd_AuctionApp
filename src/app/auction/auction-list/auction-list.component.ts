import {Component, OnInit} from '@angular/core';
import {AuctionService} from '../auction.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-auction-list',
    templateUrl: './auction-list.component.html',
    styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
    auctions: any = [];

    constructor(private httpClient: HttpClient, private auctionService: AuctionService) {
    }

    ngOnInit() {
        console.log(this.auctionService.getAuctions());
        this.auctionService.getAuctions().subscribe((data: {}) => {
            this.auctions = data;
        });
    }

//    @TODO: nie wyświetla danych aukcji
}
