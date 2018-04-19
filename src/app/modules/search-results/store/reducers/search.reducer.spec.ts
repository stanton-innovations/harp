import * as fromSearch from './search.reducer';
import * as fromActions from '../actions/search.action';
import { SearchResult } from '../../models/search-result';

describe('Search Reducer', () => {
  it('has a default state', () => {
    const { initialState } = fromSearch;
    const action = {} as any;
    const state = fromSearch.reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('Does not LoadSearchResults action', () => {
    const { initialState } = fromSearch;
    const action = new fromActions.LoadSearchResults('');
    const state = fromSearch.reducer(initialState, action);

    expect(action.payload).toEqual('');
    expect(state.loading).toEqual(true);
    expect(state.loaded).toEqual(false);
    expect(state.entities).toEqual({});
  });

  it('LoadSearchResults action', () => {
    const { initialState } = fromSearch;
    const action = new fromActions.LoadSearchResults('hammer');
    const state = fromSearch.reducer(initialState, action);

    expect(action.payload).toEqual('hammer');
    expect(state.loading).toEqual(true);
  });

  it('LoadSearchResultsSuccess action', () => {
    const searchResults: SearchResult[] = [
      {id: 0, name: 'Hammer'},
      {id: 1, name: 'Nail'}
    ];

    const entities = {
      0: searchResults[0],
      1: searchResults[1]
    };
    const { initialState } = fromSearch;
    const action = new fromActions.LoadSearchResultsSuccess(searchResults);
    const state = fromSearch.reducer(initialState, action);

    expect(state.loaded).toEqual(true);
    expect(state.loading).toEqual(false);
    expect(state.entities).toEqual(entities);

    expect(fromSearch.getSearchEntities(state)).toEqual(entities);
    expect(fromSearch.getSearchLoading(state)).toEqual(false);
    expect(fromSearch.getSearchLoaded(state)).toEqual(true);
  });
});
