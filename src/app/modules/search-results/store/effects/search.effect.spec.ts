import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { empty, Observable, of } from 'rxjs';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';

import { SearchEffects } from '../effects/';
import * as SearchActions from '../actions/';
import { SearchResult } from '../../models/search-result';
import { SearchService } from '../../services/search.service';
import { SEARCH_DEBOUNCE, SEARCH_SCHEDULER } from './search.effect';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('My Effects', () => {
  let effects: SearchEffects;
  let service: SearchService;
  let actions$: TestActions;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SearchEffects,
        SearchService,
        {provide: Actions, useFactory: getActions},
        {provide: SEARCH_SCHEDULER, useFactory: getTestScheduler},
        {provide: SEARCH_DEBOUNCE, useValue: 30},
      ],
    });
    effects = TestBed.get(SearchEffects);
    service = TestBed.get(SearchService);
    actions$ = TestBed.get(Actions);
    spyOn(service, 'get').and.returnValue(of(searchResults));
  });

  it(`checks if search is an empty string`, () => {
    const action = new SearchActions.LoadSearchResults('');

    actions$.stream = hot('-a---', {a: action});
    const expected = cold('---');

    expect(effects.loadSearchResults$).toBeObservable(expected);
  });

  it('loads search results', fakeAsync(() => {
    const action = new SearchActions.LoadSearchResults('hammer');
    const complete = new SearchActions.LoadSearchResultsSuccess(searchResults);
    actions$.stream = hot('-a', {a: action});
    const expected = cold('----b', {b: complete});
    flush();
    expect(effects.loadSearchResults$).toBeObservable(expected);
  }));
});
