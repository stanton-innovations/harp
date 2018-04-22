import { Action } from '@ngrx/store';

export enum SearchDetailActionTypes {
  LoadSearchDetailResult = '[Result] Load Search Detail',
  LoadSearchDetailResultFail = '[Result] Load Search Detail Fail',
  LoadSearchDetailResultSuccess = '[Result] Load Search Detail Success'
}

export class LoadSearchDetailResult implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResult;
  constructor(public payload: any) {}
}

export class LoadSearchDetailResultSuccess implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResultSuccess;
  constructor(public payload: any) {}
}

export class LoadSearchDetailResultFail implements Action {
  readonly type = SearchDetailActionTypes.LoadSearchDetailResultFail;
  constructor(public payload: any) {}
}

export type SearchDetailAction =
  | LoadSearchDetailResult
  | LoadSearchDetailResultFail
  | LoadSearchDetailResultSuccess;
