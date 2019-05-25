import {NgModule} from '@angular/core';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersCreateComponent} from './users-create/users-create.component';
import {UsersRoutingModule} from './users-routing.module';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { UserFormValidationService } from './users-shared/user-form-validation.service';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersCreateComponent,
    UserComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  providers: [
    UserFormValidationService
  ]
})
export class UsersModule {
}
