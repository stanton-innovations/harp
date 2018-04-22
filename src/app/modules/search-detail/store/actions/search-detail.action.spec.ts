import * as fromDetailSearch from './search-detail.action';

describe('Search Actions', () => {
  it('creates a load search action ', () => {
    const payload = 'hammer';
    const action = new fromDetailSearch.LoadSearchDetailResults(payload);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResults,
      payload
    });
  });

  it('creates load search success action ', () => {
    const payload = [
      {id: 0, name: 'Hammer'},
      {id: 1, name: 'Nail'}
    ];
    const action = new fromDetailSearch.LoadSearchDetailResultsSuccess(payload);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResultsSuccess,
      payload
    });
  });

  it('creates load search fail action ', () => {
    const action = new fromDetailSearch.LoadSearchDetailResultsFail(undefined);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResultsFail,
      payload: undefined
    });
  });
});
