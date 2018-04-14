import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultsComponent } from './containers/search-results/search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SearchResultsRoutingModule
  ],
  declarations: [
    SearchResultsComponent,
    SearchResultComponent
  ]
})
export class SearchResultsModule { }
