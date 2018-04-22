import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { SearchDetailService } from '../../services/search-detail.service';
import { map, switchMap } from 'rxjs/internal/operators';
import * as fromActions from '../../store/actions';

@Injectable()
export class SearchDetailEffects {
  constructor(
    private actions$: Actions,
    private searchDetailService: SearchDetailService) {
  }

  @Effect()
  loadSearchDetail$ = this.actions$.pipe(
    ofType<fromActions.LoadSearchDetailResult>(fromActions.SearchDetailActionTypes.LoadSearchDetailResult),
    map(action => action.payload),
    switchMap((id) => {
      return this.searchDetailService
        .get(id)
        .pipe(
          map(detail => new fromActions.LoadSearchDetailResultSuccess(detail))
        );
    }));
}
