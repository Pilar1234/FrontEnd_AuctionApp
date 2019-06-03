import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuctionListComponent} from './auction-list.component';
import {AuctionCreateComponent} from '../auction-create/auction-create.component';
import {AuctionItemComponent} from '../auction-item/auction-item.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AuctionService} from '../auction-shared/auction.service';
import {Routes} from '@angular/router';

describe('AuctionListComponent', () => {
    let component: AuctionListComponent;
    let fixture: ComponentFixture<AuctionListComponent>;
    const routes: Routes = [
        {path: 'auction-list', component: AuctionListComponent},
        {path: 'auction-create', component: AuctionCreateComponent}
    ];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuctionCreateComponent,
                AuctionListComponent,
                AuctionItemComponent
            ],
            imports: [
                SharedModule,
                RouterTestingModule.withRoutes(routes),
                HttpClientModule,
            ],
            providers: [
                AuctionService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuctionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
