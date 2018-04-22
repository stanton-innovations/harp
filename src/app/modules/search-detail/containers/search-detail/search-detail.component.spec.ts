import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailComponent } from './search-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchDetailService } from '../../services/search-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActionReducer, StoreModule } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as fromActions from '../../store/actions';

export function mockMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return function (state: any, action: any): any {

    switch (action.type) {
      case fromActions.SearchDetailActionTypes.LoadSearchDetailResultSuccess:
        return reducer({...state, ...action.payload}, action);
    }

    return reducer(state, action);
  };
}
describe('SearchDetailComponent', () => {
  let component: SearchDetailComponent;
  let fixture: ComponentFixture<SearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        StoreModule.forRoot({ ...fromRoot.reducers },
          { metaReducers: [mockMetaReducer] })
      ],
      declarations: [ SearchDetailComponent ],
      providers: [
        SearchDetailService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
