import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { SearchService } from '../../services/search.service';
import { catchError, map, switchMap, tap } from 'rxjs/internal/operators';
import * as fromActions from '../actions/';
import { SearchResult } from '../../models/search-result';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {
  }

  @Effect()
  loadSearchResults$ = this.actions$
    .ofType(fromActions.SearchActionTypes.LoadSearchResults)
    .pipe(
      switchMap(() => {
        console.log('blah');
        return this.searchService
          .get()
          .pipe(
            // tap(data => console.log('data', data.list)),
            map((searchResults: {list: {results: SearchResult[]}}) => new fromActions.LoadSearchResultsSuccess(searchResults.list.results)),
            // catchError(error => of(new fromActions.LoadSearchResultsFail(error)))
          );
      })
    );
}

