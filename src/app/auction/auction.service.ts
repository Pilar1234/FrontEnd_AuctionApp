import {Injectable} from '@angular/core';
import {Auction} from './auction';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private httpClient: HttpClient) {
  }

  getAuctions(): Observable<Auction> {
    return this.httpClient.get<Auction>(' http://localhost:3000/auctions');
  }

  addAuction(auction: Auction) {
    return this.httpClient.post(' http://localhost:3000/auctions', auction);
  }

}
