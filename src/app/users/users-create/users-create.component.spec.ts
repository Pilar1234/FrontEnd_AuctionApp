import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersCreateComponent} from './users-create.component';
import {ToastrModule} from 'ngx-toastr';
import {UserFormValidationService} from '../users-shared/user-form-validation.service';
import {SharedModule} from '../../shared/shared.module';
import {UserService} from '../users-shared/user.service';
import {UsersListComponent} from '../users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';

describe('UsersCreateComponent', () => {
    let component: UsersCreateComponent;
    let fixture: ComponentFixture<UsersCreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                UsersCreateComponent,
                UsersListComponent
            ],
            imports: [
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

    it('should render title in a h2 tag', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain('Register user');
    });

    it('clear inputs', () => {
        component.userForm.controls.login.setValue('test');
        component.userForm.controls.firstName.setValue('test');
        component.userForm.controls.secondName.setValue('test');
        component.userForm.controls.email.setValue('test@gmail.com');
        component.clearInputs();
        expect(component.userForm.controls.login.value).toBe(null);
        expect(component.userForm.controls.firstName.value).toBe(null);
        expect(component.userForm.controls.secondName.value).toBe(null);
        expect(component.userForm.controls.email.value).toBe(null);
    });

    it('should form be invalid when empty', () => {
        expect(component.userForm.valid).toBeFalsy();
    });

    it('should form be valid when all fields are filed', () => {
        component.userForm.controls.login.setValue('test');
        component.userForm.controls.firstName.setValue('test');
        component.userForm.controls.secondName.setValue('test');
        component.userForm.controls.email.setValue('test@gmail.com');
        expect(component.userForm.valid).toBeTruthy();
    });

    it('login field validity', () => {
        const login = component.userForm.controls.login;
        expect(login.errors.required).toBeTruthy();
    });

    it('firstName field validity', () => {
        const firstName = component.userForm.controls.firstName;
        expect(firstName.errors.required).toBeTruthy();
    });

    it('secondName field validity', () => {
        const secondName = component.userForm.controls.secondName;
        expect(secondName.errors.required).toBeTruthy();
    });

    describe('email field validity', () => {
        it('email - required', () => {
            const email = component.userForm.controls.email;
            expect(email.errors.required).toBeTruthy();
        });

        it('email - bad pattern', () => {
            const email = component.userForm.controls.email;
            component.userForm.controls.email.setValue('test');
            expect(email.errors.email).toBeTruthy();
        });
    });

});
