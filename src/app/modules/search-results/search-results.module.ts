import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultsComponent } from './containers/search-results/search-results.component';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchService } from './services/search.service';
import { effects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('search', reducers),
    EffectsModule.forFeature(effects),
    MatCardModule,
    MatButtonModule,
    SearchResultsRoutingModule
  ],
  declarations: [
    SearchResultsComponent,
    SearchResultComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchResultsModule { }
