import * as fromSearch from './search.reducer';
import * as fromActions from '../actions/search.action';

describe('Search Reducer', () => {
  it('has a default state', () => {
    const { initialState } = fromSearch;
    const action = {} as any;
    const state = fromSearch.reducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('LoadSearchResults action', () => {
    const { initialState } = fromSearch;
    const action = new fromActions.LoadSearchResults();
    const state = fromSearch.reducer(initialState, action);

    expect(state.loading).toEqual(true);
    expect(state.loaded).toEqual(false);
    expect(state.entities).toEqual({});
  });
});
