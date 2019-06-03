import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionService } from './auction/auction-shared/auction.service';
import { CoreModule } from './core/core.module';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { HttpService } from './shared/http.service';
import { UserService } from './users/users-shared/user.service';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        SharedModule,
        CoreModule,
        ToastrModule.forRoot(),
        AppRoutingModule,
    ],
    providers: [
         {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true
      },
        AuctionService,
        UserService,
        HttpService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
