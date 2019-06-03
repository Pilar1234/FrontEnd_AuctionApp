import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {UserFormValidationService} from '../users-shared/user-form-validation.service';
import {UserModel} from '../users-shared/user.model';
import {UserService} from '../users-shared/user.service';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
    private userForm: FormGroup;
    private inputsArray: any[];
    private user = {} as UserModel;

    constructor(private toastr: ToastrService,
                private userFormValidation: UserFormValidationService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.inputsArray = [
            { field: 'login', header: 'Login' },
            { field: 'firstName', header: 'First Name' },
            { field: 'secondName', header: 'Second Name' },
            { field: 'email', header: 'Email' },
        ];
        this.userForm = this.userFormValidation.initForm(this.user);
    }

    clearInputs() {
        this.userForm.reset();
    }

    onSubmit() {
        this.toastr.success('Uczestnik pomyślnie dodany');
        this.userService.addUser(this.userForm.value).subscribe(
            (response) => console.log(response)
        );
    }

}
