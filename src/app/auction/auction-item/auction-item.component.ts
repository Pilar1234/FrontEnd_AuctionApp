import {Component, Input, OnInit} from '@angular/core';
import {Auction} from '../auction';

@Component({
  selector: 'app-auction-item',
  templateUrl: './auction-item.component.html',
  styleUrls: ['./auction-item.component.css']
})
export class AuctionItemComponent implements OnInit {
  @Input() auction: Auction;
  @Input() index: number;

  constructor() {
  }

  ngOnInit() {
    console.log(this.auction);
  }

}
