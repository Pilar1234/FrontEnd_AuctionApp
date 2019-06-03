import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';

@Injectable()
export class UserFormValidationService {
  private userForm: FormGroup;
  private loginValidators = [Validators.required];
  private firstNameValidators = [Validators.required];
  private secondNameValidators = [Validators.required];
  private emailValidators = [Validators.required, Validators.email];

  constructor(private fb: FormBuilder) {
  }

  initForm(user: UserModel) {
    this.userForm = this.fb.group({
      login: [user.login, this.loginValidators],
      firstName: [user.firstName, this.firstNameValidators],
      secondName: [user.secondName, this.secondNameValidators],
      email: [user.email, this.emailValidators]
    });
    return this.userForm;
  }
}
