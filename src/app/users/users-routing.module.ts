import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersCreateComponent} from './users-create/users-create.component';
import {UsersListComponent} from './users-list/users-list.component';

const usersRoutes: Routes = [
  { path: 'user-list', component: UsersListComponent},
  { path: 'user-create', component: UsersCreateComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
