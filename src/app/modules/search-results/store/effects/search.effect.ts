import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SearchService } from '../../services/search.service';
import { debounceTime, map, switchMap } from 'rxjs/internal/operators';
import * as fromActions from '../actions/';
import { SearchResult } from '../../models/search-result';
import { asyncScheduler, EMPTY, Scheduler } from 'rxjs';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    /**
     * You inject an optional Scheduler that will be undefined
     * in normal application usage, but its injected here so that you can mock out
     * during testing using the RxJS TestScheduler for simulating passages of time.
     */
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {
  }

  @Effect()
  loadSearchResults$ = this.actions$.pipe(
    ofType<fromActions.LoadSearchResults>(fromActions.SearchActionTypes.LoadSearchResults),
    debounceTime(this.debounce || 300, this.scheduler || asyncScheduler),
    map(action => action.payload),
    switchMap((search) => {
      if (search === '') {
        return EMPTY;
      }
      return this.searchService
        .get()
        .pipe(
          // tap(data => console.log('data', data)),
          map((searchResults: SearchResult[]) =>
            new fromActions.LoadSearchResultsSuccess(searchResults)
          ));
    }));
}

