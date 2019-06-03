import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersCreateComponent} from './users-create.component';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {UserFormValidationService} from '../users-shared/user-form-validation.service';
import {SharedModule} from '../../shared/shared.module';
import {UserService} from '../users-shared/user.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {UsersListComponent} from '../users-list/users-list.component';

describe('UsersCreateComponent', () => {
    let component: UsersCreateComponent;
    let fixture: ComponentFixture<UsersCreateComponent>;
    const routes: Routes = [
        {path: 'user-list', component: UsersListComponent},
        {path: 'user-create', component: UsersCreateComponent},
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsersCreateComponent,
                UsersListComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                ToastrModule.forRoot(),
                HttpClientModule,
                SharedModule
            ],
            providers: [
                UserService,
                UserFormValidationService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
