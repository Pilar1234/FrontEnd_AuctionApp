import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from './user.model';

@Injectable()
export class UserService {
    users: UserModel[];

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<UserModel[]>('services/users/all').subscribe(users => {
            users.forEach(user => this.users.push(user));
        });
    }

    addUser(user: UserModel) {
        return this.httpClient.put('http://localhost:3000/users/' + user.id, user);
    }

}
