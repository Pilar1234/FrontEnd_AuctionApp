import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersListComponent} from './users-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../../shared/shared.module';
import {UserService} from '../users-shared/user.service';
import {Routes} from '@angular/router';
import {UsersCreateComponent} from '../users-create/users-create.component';

describe('UsersListComponent', () => {
    let component: UsersListComponent;
    let fixture: ComponentFixture<UsersListComponent>;
    const routes: Routes = [
        {path: 'user-list', component: UsersListComponent},
        {path: 'user-create', component: UsersCreateComponent},
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsersListComponent,
                UsersCreateComponent],
            imports: [
                RouterTestingModule.withRoutes(routes),
                ToastrModule.forRoot(),
                HttpClientModule,
                SharedModule
            ],
            providers: [
                UserService,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
