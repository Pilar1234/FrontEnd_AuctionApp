export interface AuctionModel {
    id: number;
    auctionName: string;
    auctionStartPrice: number;
    auctionPresentPrice: number;
    auctionDescription: string;
    auctionImagePath: string;
    auctionType: string;
    auctionEndDate: Date;
    auctionStartDate: Date;
}
