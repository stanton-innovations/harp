import * as fromSearch from './search-action';

describe('Search Actions', () => {
  it('creates a load search action ', () => {
    const action = new fromSearch.LoadSearchResults();
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResults
    });
  });

  it('creates load search success action ', () => {
    const action = new fromSearch.LoadSearchResultsSuccess();
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResultsSuccess
    });
  });

  it('creates load search fail action ', () => {
    const action = new fromSearch.LoadSearchResultsFail();
    expect({...action}).toEqual({
      type: fromSearch.SearchActionTypes.LoadSearchResultsFail
    });
  });
});
