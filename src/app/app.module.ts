import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AuctionService } from './auction/auction-shared/auction.service';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './users/users-shared/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
        AuctionService,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
