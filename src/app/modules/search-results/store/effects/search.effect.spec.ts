import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Actions } from '@ngrx/effects';
import { SearchService } from '../../services/search.service';
import * as fromEffects from './search.effect';
import { empty, Observable } from 'rxjs';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('Search Effect', () => {
  let actions$: TestActions;
  let service: SearchService;
  let effects: fromEffects.SearchEffects;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SearchService
      ]
    });
  });
});
