import { Action } from '@ngrx/store';

export enum SearchDetailActionTypes {
  LoadSearchDetailResults = '[Search] Load Search Results',
  LoadSearchDetailResultsFail = '[Search] Load Search Results Fail',
  LoadSearchDetailResultsSuccess = '[Search] Load Search Results Success'
}

export class LoadSearchDetailResults implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResults;
  constructor(public payload: any) {}
}

export class LoadSearchDetailResultsSuccess implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResultsSuccess;
  constructor(public payload: any) {}
}

export class LoadSearchDetailResultsFail implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResultsFail;
  constructor(public payload: any) {}
}

export type SearchDetailAction =
  | LoadSearchDetailResults
  | LoadSearchDetailResultsFail
  | LoadSearchDetailResultsSuccess;
