export class Auction {
    id: number;
    auctionName: string;
    auctionStartPrice: number;
    auctionPresentPrice: number;
    auctionDescription: string;
    auctionImagePath: string;
    auctionType: string;
    auctionEndDate: Date;
    auctionStartDate: Date;

    constructor() {
        this.auctionStartDate = new Date();
    }
}
