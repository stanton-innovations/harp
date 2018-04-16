import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FakeBackendProvider } from './services/fake-backend-interceptor.service';
import { TinkerService } from './services/tinker.service';
import { HeaderComponent } from './containers/header/header.component';
import { StoreComponent } from './components/store/store.component';
import { SearchComponent } from './components/search/search.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchResultsModule } from './modules/search-results/search-results.module';
import { AppRoutingModule } from './app-routing.module';
import { MiniCartModule } from './modules/mini-cart/mini-cart.module';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { reducers, CustomSerializer } from './store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreComponent,
    SearchComponent,
    StoreLocationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    environment.production ?  [] : StoreDevtoolsModule.instrument(),
    SearchResultsModule,
    MiniCartModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MiniCartModule
  ],
  providers: [
    FakeBackendProvider,
    TinkerService,
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
