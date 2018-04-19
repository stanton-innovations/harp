import { SearchResult } from '../../models/search-result';
import * as fromActions from '../actions/search.action';

export interface SearchState {
  entities: { [id: number]: SearchResult };
  loaded: boolean;
  loading: boolean;
}

export const initialState: SearchState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromActions.SearchAction): SearchState {
  switch (action.type) {
    case fromActions.SearchActionTypes.LoadSearchResults: {
      const searchString = action.payload;

      return searchString === '' ? {
        ...state,
        loading: true,
        ...searchString
      } : {
        ...state,
        loading: true
      };
    }
    case fromActions.SearchActionTypes.LoadSearchResultsSuccess: {
      const searchResults = action.payload;
      const entities = searchResults.reduce(
        (results: { [id: number]: SearchResult }, searchResult: SearchResult) => {
          return {
            ...results,
            [searchResult.id]: searchResult,
          };
        },
        {
          ...state.entities,
        }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }
  }
  return state;
}

export const getSearchEntities = (state: SearchState) => state.entities;
export const getSearchLoading = (state: SearchState) => state.loading;
export const getSearchLoaded = (state: SearchState) => state.loaded;
