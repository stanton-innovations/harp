import { SearchResult } from '../../models/search-result';
import * as fromActions from '../actions/search.action';
export interface SearchState {
  entities: { [id: number]: SearchResult };
  loaded: boolean;
  loading: boolean;
}
export const initialState: SearchState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromActions.SearchAction): SearchState {
  return state;
}
