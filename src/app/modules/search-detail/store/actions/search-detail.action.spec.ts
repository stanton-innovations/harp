import * as fromDetailSearch from './search-detail.action';

describe('Search Actions', () => {
  it('creates a load search action ', () => {
    const payload = 'hammer';
    const action = new fromDetailSearch.LoadSearchDetailResult(payload);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResult,
      payload
    });
  });

  it('creates load search success action ', () => {
    const payload = [
      {id: 0, name: 'Hammer'},
      {id: 1, name: 'Nail'}
    ];
    const action = new fromDetailSearch.LoadSearchDetailResultSuccess(payload);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResultSuccess,
      payload
    });
  });

  it('creates load search fail action ', () => {
    const action = new fromDetailSearch.LoadSearchDetailResultFail(undefined);
    expect({...action}).toEqual({
      type: fromDetailSearch.SearchDetailActionTypes.LoadSearchDetailResultFail,
      payload: undefined
    });
  });
});
