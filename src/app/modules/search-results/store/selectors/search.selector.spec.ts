import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromReducers from '../reducers/index';
import { TestBed } from '@angular/core/testing';
import { SearchResult } from '../../models/search-result';

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
          products: combineReducers(fromReducers.reducers),
        }),
      ],
    });

    store = TestBed.get(Store);
  });
});
