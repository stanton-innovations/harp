import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/';

export const getSearchState = createSelector(
  fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.results
);
