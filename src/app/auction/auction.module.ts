import {NgModule} from '@angular/core';

import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionCreateComponent} from './auction-create/auction-create.component';
import {AuctionRoutingModule} from './auction-routing.module';
import {AuctionItemComponent} from './auction-item/auction-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        AuctionListComponent,
        AuctionCreateComponent,
        AuctionItemComponent,
    ],
    imports: [
        SharedModule,
        AuctionRoutingModule
    ]
})
export class AuctionModule {

}
