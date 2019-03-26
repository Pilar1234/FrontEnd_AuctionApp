import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersCreateComponent} from './users-create/users-create.component';
import {UsersRoutingModule} from './users-routing.module';
import { UserComponent } from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersCreateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
