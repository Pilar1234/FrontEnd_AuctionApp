import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {AppRoutingModule} from '../app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        NavbarComponent,
        PageNotFoundComponent
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
