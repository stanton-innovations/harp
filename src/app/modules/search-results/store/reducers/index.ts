import * as fromSearch from './search.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface SearchState {
  results: fromSearch.SearchState;
}

export const reducers: ActionReducerMap<SearchState> = {
  results: fromSearch.reducer
};

export const getSearchState =
  createFeatureSelector<SearchState>('search');
