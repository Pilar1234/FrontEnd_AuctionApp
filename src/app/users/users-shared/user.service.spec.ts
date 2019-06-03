import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {UserFormValidationService} from './user-form-validation.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [],
        imports: [
            ToastrModule.forRoot(),
            HttpClientModule,
            SharedModule
        ],
        providers: [
            UserService,
            UserFormValidationService
        ]
    }));

    it('should be created', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
    });
});
