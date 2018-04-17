import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/';
import * as fromSearch from '../reducers/search.reducer';

export const getSearchResults =
  createSelector(fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.results);

export const getSearchEntities =
  createSelector(getSearchResults, fromSearch.getSearchEntities);
