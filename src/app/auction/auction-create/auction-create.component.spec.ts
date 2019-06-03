import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AuctionCreateComponent} from './auction-create.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {AuctionListComponent} from '../auction-list/auction-list.component';
import {AuctionService} from '../auction-shared/auction.service';
import {AuctionItemComponent} from '../auction-item/auction-item.component';
import {AuctionFormValidationService} from '../auction-shared/auction-form-validation.service';

describe('AuctionCreateComponent', () => {
    let component: AuctionCreateComponent;
    let fixture: ComponentFixture<AuctionCreateComponent>;
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
                AuctionService,
                AuctionFormValidationService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuctionCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('form should be invalid', async(() => {
    //     component.auctionForm.controls.auctionName.setValue('');
    //     expect(component.auctionForm.valid).toBeFalsy();
    // }));
});
