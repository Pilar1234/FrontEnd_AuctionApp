import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../users-shared/user.service';

@Component({
    selector: 'app-users-create',
    templateUrl: './users-create.component.html',
    styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
    private userForm: FormGroup;

    constructor(private toastr: ToastrService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.userForm = new FormGroup({
            login: new FormControl('', [Validators.required]),
            firstName: new FormControl('', [Validators.required]),
            secondName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
        });
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
