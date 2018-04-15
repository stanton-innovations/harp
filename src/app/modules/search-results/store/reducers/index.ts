import * as fromSearch from './search.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  results: fromSearch.SearchState;
}

export const reducers = {
  results: fromSearch.reducer
};

export const getSearchState = createFeatureSelector<SearchState>(
  'search'
);
