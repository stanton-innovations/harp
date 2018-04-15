import * as fromSearch from './search.reducer';

describe('Search Reducer', () => {
  it('has a default state', () => {
    const { initialState } = fromSearch;
    const action = {} as any;
    const state = fromSearch.reducer(undefined, action);
    expect(state).toBe(initialState);
  });
});
