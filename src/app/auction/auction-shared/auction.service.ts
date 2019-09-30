import {Injectable} from '@angular/core';
import {AuctionModel} from './auction.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuctionService {
    auctions: AuctionModel[];

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<AuctionModel[]>(' http://localhost:3000/auctions').subscribe(auctions => {
            auctions.forEach(auction => this.auctions.push(auction));
        });
    }

    addAuction(auction: AuctionModel) {
        return this.httpClient.post(' http://localhost:3000/auctions', auction);
    }

}
