import { TestBed } from '@angular/core/testing';

import { AuctionService } from './auction.service';
import {AuctionCreateComponent} from '../auction-create/auction-create.component';
import {AuctionItemComponent} from '../auction-item/auction-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {FormGroup} from '@angular/forms';
import {UserFormValidationService} from '../../users/users-shared/user-form-validation.service';

describe('AuctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AuctionCreateComponent,
      AuctionItemComponent
    ],
    imports: [
      HttpClientModule,
      SharedModule
    ],
    providers: [
      AuctionService,
      UserFormValidationService
    ]
  }));

  it('should be created', () => {
    const service: AuctionService = TestBed.get(AuctionService);
    expect(service).toBeTruthy();
  });
});
