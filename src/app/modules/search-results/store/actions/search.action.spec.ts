import * as fromSearch from './search.action';

describe('Search Actions', () => {
  it('creates a load search action ', () => {
    const action = new fromSearch.LoadSearchResults();
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResults
    });
  });

  it('creates load search success action ', () => {
    const payload = [
      {id: 0, name: 'Hammer'},
      {id: 1, name: 'Nail'}
    ];
    const action = new fromSearch.LoadSearchResultsSuccess(payload);
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResultsSuccess,
      payload
    });
  });

  it('creates load search fail action ', () => {
    const action = new fromSearch.LoadSearchResultsFail(undefined);
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResultsFail,
      payload: undefined
    });
  });
});
