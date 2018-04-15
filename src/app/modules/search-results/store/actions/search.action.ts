import { Action } from '@ngrx/store';
import { SearchResult } from '../../models/search-result';

export enum SearchActionTypes {
  LoadSearchResults = '[Search] Load Search Results',
  LoadSearchResultsFail = '[Search] Load Search Results Fail',
  LoadSearchResultsSuccess = '[Search] Load Search Results Success'
}

export class LoadSearchResults implements Action {
  payload: undefined;
  readonly type = SearchActionTypes.LoadSearchResults;
}

export class LoadSearchResultsSuccess implements Action {
  type = SearchActionTypes.LoadSearchResultsSuccess;
  constructor(public payload: SearchResult[]) {}
}

export class LoadSearchResultsFail implements Action {
  readonly type = SearchActionTypes.LoadSearchResultsFail;
}

export type SearchAction =
  | LoadSearchResults
  | LoadSearchResultsFail
  | LoadSearchResultsSuccess;
