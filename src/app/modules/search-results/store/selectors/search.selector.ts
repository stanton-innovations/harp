import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers/';
import * as fromSearch from '../reducers/search.reducer';

export const getSearchResults =
  createSelector(fromFeature.getSearchState,
  (state: fromFeature.SearchState) => state.results);

export const getSearchEntities =
  createSelector(getSearchResults, fromSearch.getSearchEntities);

export const getAllSearchResults = createSelector(
  getSearchEntities,
  (entities) => {
    return Object.keys(entities).map(name => entities[name]);
  });

export const getAllSearchLoaded =
  createSelector(getSearchResults, fromSearch.getSearchLoaded);

export const getAllSearchLoading =
  createSelector(getSearchResults, fromSearch.getSearchLoading);
