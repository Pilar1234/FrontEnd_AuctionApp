import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuctionRoutingModule} from './auction/auction-routing.module';
import {AuctionModule} from './auction/auction.module';
import {CoreModule} from './core/core.module';
import {UsersModule} from './users/users.module';
import {HttpClientModule} from '@angular/common/http';
import {AuctionService} from './auction/auction.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {UserService} from './users/user.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuctionModule,
        CoreModule,
        UsersModule,
        AuctionRoutingModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
    ],
    providers: [AuctionService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// @todo: wydzielić servisy do odpowiednich modułów
// @todo: stworzyć odpowiedni shared module
