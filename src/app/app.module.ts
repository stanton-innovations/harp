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
    RouterModule,
    SearchResultsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [FakeBackendProvider, TinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
