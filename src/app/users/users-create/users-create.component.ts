import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserFormValidationService} from '../users-shared/user-form-validation.service';
import {UserModel} from '../users-shared/user.model';
import {UserService} from '../users-shared/user.service';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
    userForm: FormGroup;
    private title = 'Register user';
    private inputsArray: any[];
    private user = {} as UserModel;

    constructor(private userFormValidation: UserFormValidationService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.inputsArray = [
            {field: 'login', header: 'Login'},
            {field: 'firstName', header: 'First Name'},
            {field: 'secondName', header: 'Second Name'},
            {field: 'email', header: 'Email'},
        ];
        this.userForm = this.userFormValidation.initForm(this.user);
    }

    clearInputs() {
        this.userForm.reset();
    }

    onSubmit() {
        this.userService.addUser(this.userForm.value).subscribe(
            (response) => console.log(response)
        );
    }

}
