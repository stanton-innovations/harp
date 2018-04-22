import * as fromActions from '../actions/search-detail.action';

export interface SearchDetailState {
  entity: { [id: number]: any };
  loaded: boolean;
  loading: boolean;
}

export const initialState: SearchDetailState = {
  entity: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromActions.SearchDetailAction): SearchDetailState {
  switch (action.type) {
    case fromActions.SearchDetailActionTypes.LoadSearchDetailResult : {
      const searchString = action.payload;
      console.log('BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
      return {
        ...state,
        loading: true
      };
    }
    case fromActions.SearchDetailActionTypes.LoadSearchDetailResultSuccess : {
      const entity = action.payload;
      console.log('Bppppppppppppppppppppppppppppp');
      return {
        ...state,
        loading: false,
        loaded: true,
        ...entity
      };
    }
  }
  return state;
}

export const getSearchDetailEntity = (state: SearchDetailState) => state.entity;
