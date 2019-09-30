import {Component, Input, OnInit} from '@angular/core';
import {AuctionModel} from '../auction-shared/auction.model';

@Component({
    selector: 'app-auction-item',
    templateUrl: './auction-item.component.html',
    styleUrls: ['./auction-item.component.css']
})
export class AuctionItemComponent implements OnInit {
    @Input() auction: AuctionModel;
    @Input() index: number;

    constructor() {
    }

    ngOnInit() {
        console.log(this.auction);
    }

}
