import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  ]
})
export class CoreModule {
}
