import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/';
import * as fromSearch from '../reducers/search-detail.reducer';

export const getSearchDetailResult =
  createSelector(fromFeature.getSearchDetailState,
    (state: fromFeature.SearchDetailState) => state.results);

export const getSearchDetailEntity =
  createSelector(getSearchDetailResult, fromSearch.getSearchDetailEntity);
