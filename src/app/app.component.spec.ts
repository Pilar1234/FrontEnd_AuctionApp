import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {RouterTestingModule} from '@angular/router/testing';
import {Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {SharedModule} from './shared/shared.module';

describe('AppComponent', () => {
    const routes: Routes = [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: '', loadChildren: './auction/auction.module#AuctionModule'},
        {path: '', loadChildren: './users/users.module#UsersModule'},
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                RouterTestingModule.withRoutes(routes),
                CoreModule,
                SharedModule,
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

});
