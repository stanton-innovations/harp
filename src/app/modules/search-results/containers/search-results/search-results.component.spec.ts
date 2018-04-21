import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { SearchResultComponent } from '../../components/search-result/search-result.component';
import { MatCardModule } from '@angular/material';
import { ActionReducer, Store, StoreModule } from '@ngrx/store';
import * as fromActions from '../../store/actions/';
import * as fromRoot from '../../../../store/';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

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
  let router: Router;
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
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to detail', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.showDetail({id: '1'});
    tick(301);
    expect(router.navigate).toHaveBeenCalledWith(['detail'], {
        skipLocationChange: true,
        queryParams: {
          id: '1'
        }
      });
  }));
});
