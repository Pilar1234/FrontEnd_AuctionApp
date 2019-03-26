import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AuctionListComponent} from './auction-list/auction-list.component';
import {AuctionCreateComponent} from './auction-create/auction-create.component';
import {AuctionRoutingModule} from './auction-routing.module';
import {AuctionItemComponent} from './auction-item/auction-item.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        AuctionListComponent,
        AuctionCreateComponent,
        AuctionItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ToastModule,
        AuctionRoutingModule
    ]
})
export class AuctionModule {

}
