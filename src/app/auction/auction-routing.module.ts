import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionCreateComponent} from './auction-create/auction-create.component';

const auctionRoutes: Routes = [
    {path: 'auction-list', component: AuctionListComponent},
    {path: 'auction-create', component: AuctionCreateComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(auctionRoutes)
    ],
    exports: [RouterModule]
})
export class AuctionRoutingModule {
}
