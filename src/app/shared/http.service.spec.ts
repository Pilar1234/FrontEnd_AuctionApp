import {TestBed} from '@angular/core/testing';

import {HttpService} from './http.service';
import {CoreModule} from '../core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared.module';

describe('HttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        declarations: [],
        imports: [
            HttpClientModule,
            CoreModule,
            SharedModule,
        ],
        providers: [
            HttpService
        ]
    }));

    it('should be created', () => {
        const service: HttpService = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });
});
