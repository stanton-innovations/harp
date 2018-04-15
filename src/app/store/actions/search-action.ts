import { Action } from '@ngrx/store';


export enum SearchActionTypes {
  LoadSearchResults = '[Search] Load Search Results',
  LoadSearchResultsFail = '[Search] Load Search Results Fail',
  LoadSearchResultsSuccess = '[Search] Load Search Results Success'
}

export class LoadSearchResults implements Action {
  readonly type: string = SearchActionTypes.LoadSearchResults;
}

export class LoadSearchResultsSuccess implements Action {
  readonly type: string = SearchActionTypes.LoadSearchResultsSuccess;
}

export class LoadSearchResultsFail implements Action {
  readonly type: string = SearchActionTypes.LoadSearchResultsFail;
}

export type SearchAction =
  LoadSearchResults |
  LoadSearchResultsFail |
  LoadSearchResultsSuccess;
