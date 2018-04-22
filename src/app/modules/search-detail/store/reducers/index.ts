import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromSearchDetail from './search-detail.reducer';

export interface SearchDetailState {
  results: fromSearchDetail.SearchDetailState;
}

export const reducers: ActionReducerMap<SearchDetailState> = {
  results: fromSearchDetail.reducer
};

export const getSearchDetailState =
  createFeatureSelector<SearchDetailState>('result');
