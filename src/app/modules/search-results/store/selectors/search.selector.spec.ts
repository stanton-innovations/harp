import { TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { SearchResult } from '../../models/search-result';

import * as fromRoot from '../../../../store/';
import * as fromReducers from '../reducers/index';
import * as fromSelectors from '../selectors/index';
import * as fromActions from '../actions/index';

describe('search selectors', () => {
  let store: Store<fromReducers.SearchState>;
  const item1: SearchResult = {
      id: 0,
      name: 'hammer'
    },
    item2: SearchResult = {
      id: 1,
      name: 'nail'
    },
    item3: SearchResult = {
      id: 2,
      name: 'drill'
    };

  const searchResults: SearchResult[] = [item1, item2, item3];

  const entities = {
    0: searchResults[0],
    1: searchResults[1],
    2: searchResults[2]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          search: combineReducers(fromReducers.reducers),
        }),
      ],
    });

    store = TestBed.get(Store);
  });

  it('get search success', () => {
    let result = {};

    store.select(fromSelectors.getSearchState)
      .subscribe((value) => {
        result = value;
      });

    expect(result).toEqual({
      loaded: false,
      loading: false,
      entities: {}
    });

    store.dispatch(new fromActions.LoadSearchResultsSuccess(searchResults));

    expect(result).toEqual({
      entities,
      loaded: true,
      loading: false
    });
  });
});
