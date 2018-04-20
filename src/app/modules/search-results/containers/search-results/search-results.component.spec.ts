import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { SearchResultComponent } from '../../components/search-result/search-result.component';
import { MatCardModule } from '@angular/material';
import { ActionReducer, Store, StoreModule } from '@ngrx/store';
import * as fromActions from '../../store/actions/';
import * as fromRoot from '../../../../store/';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

export function mockMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return function (state: any, action: any): any {

    switch (action.type) {
      case fromActions.SearchActionTypes.LoadSearchResultsSuccess:
        return reducer({...state, ...action.payload}, action);
    }

    return reducer(state, action);
  };
}
describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        RouterTestingModule,
        StoreModule.forRoot({ ...fromRoot.reducers },
          { metaReducers: [mockMetaReducer] })
      ],
      declarations: [
        SearchResultComponent,
        SearchResultsComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
