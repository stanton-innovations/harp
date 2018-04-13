import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FakeBackendProvider } from './services/fake-backend-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { TinkerService } from './services/tinker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FakeBackendProvider, TinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
