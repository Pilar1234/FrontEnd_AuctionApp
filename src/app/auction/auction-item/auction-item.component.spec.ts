import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AuctionItemComponent} from './auction-item.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {AuctionService} from '../auction-shared/auction.service';
import {Routes} from '@angular/router';
import {AuctionListComponent} from '../auction-list/auction-list.component';
import {AuctionCreateComponent} from '../auction-create/auction-create.component';
import {AuctionFormValidationService} from '../auction-shared/auction-form-validation.service';

describe('AuctionItemComponent', () => {
    let component: AuctionItemComponent;
    let fixture: ComponentFixture<AuctionItemComponent>;
    const routes: Routes = [
        {path: 'auction-list', component: AuctionListComponent},
        {path: 'auction-create', component: AuctionCreateComponent}
    ];
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AuctionItemComponent,
                AuctionCreateComponent,
                AuctionListComponent
            ],
            imports: [
                SharedModule,
                RouterTestingModule.withRoutes(routes),
                HttpClientModule,
            ],
            providers: [
                AuctionService,
                AuctionFormValidationService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuctionItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
