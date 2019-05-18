import {NgModule} from '@angular/core';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersCreateComponent} from './users-create/users-create.component';
import {UsersRoutingModule} from './users-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersCreateComponent,
    UserComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
