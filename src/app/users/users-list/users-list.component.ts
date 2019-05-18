import {Component, OnInit} from '@angular/core';
import {UserService} from '../users-shared/user.service';
import { UserModel } from '../users-shared/user.model';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    users: UserModel[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.users = this.userService.users;
    }

}
