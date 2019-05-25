import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from './user.model';

@Injectable()
export class UserFormValidationService {
  private userForm: FormGroup;
  private loginValidators: Validators[] = [Validators.required];
  private firstNameValidators: Validators[] = [Validators.required];
  private secondNameValidators: Validators[] = [Validators.required];
  private emailValidators: Validators[] = [Validators.required, Validators.email];

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
