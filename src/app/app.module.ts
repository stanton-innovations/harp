import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppComponent } from './app.component';
import { HeaderComponent } from './containers/header/header.component';
import { StoreComponent } from './components/store/store.component';
import { SearchComponent } from './components/search/search.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { ProfileComponent } from './components/profile/profile.component';

import { environment } from '../environments/environment';
import { reducers, CustomSerializer } from './store';

import { AppRoutingModule } from './app-routing.module';
import { MiniCartModule } from './modules/mini-cart/mini-cart.module';
import { SearchResultsModule } from './modules/search-results/search-results.module';

import { FakeBackendProvider } from './services/fake-backend-interceptor.service';
import { TinkerService } from './services/tinker.service';

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
