import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchDetailRoutingModule } from './search-detail-routing.module';
import { SearchDetailComponent } from './containers/search-detail/search-detail.component';
import { SearchDetailService } from './services/search-detail.service';
import { effects } from './store/effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    SearchDetailRoutingModule,
    StoreModule.forFeature('result', reducers),
    EffectsModule.forFeature(effects)
  ],
  declarations: [SearchDetailComponent],
  providers: [SearchDetailService]
})
export class SearchDetailModule { }
