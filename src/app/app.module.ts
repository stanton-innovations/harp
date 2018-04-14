import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeBackendProvider } from './services/fake-backend-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { TinkerService } from './services/tinker.service';
import { HeaderComponent } from './containers/header/header.component';
import { StoreComponent } from './components/store/store.component';
import { SearchComponent } from './components/search/search.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatCardModule, MatExpansionModule, MatExpansionPanelHeader, MatGridListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

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
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [FakeBackendProvider, TinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
