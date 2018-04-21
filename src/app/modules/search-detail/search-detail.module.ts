import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchDetailComponent } from './containers/search-detail/search-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SearchDetailRoutingModule
  ],
  declarations: [SearchDetailComponent]
})
export class SearchDetailModule { }
