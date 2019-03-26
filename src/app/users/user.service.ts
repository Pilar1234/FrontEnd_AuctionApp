import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getUsers(): Observable<User> {
        return this.httpClient.get<User>('services/users/all');
    }

    addUser(user: User) {
        return this.httpClient.put(' http://localhost:3000/users/' + user.id, user);
    }

}
