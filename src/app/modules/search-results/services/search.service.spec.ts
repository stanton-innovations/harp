import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { api } from '../module.constants';

describe('Search Service', () => {
  let service: SearchService,
    backend: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    service = TestBed.get(SearchService);
    backend = TestBed.get(HttpTestingController);
  });

  it('gets search results', () => {
    const data = [{test: 'test'}];

    service
      .get()
      .subscribe(results => expect(results).toEqual(data));

    backend
      .match({
        url: api.results,
        method: 'GET'
      })[0]
      .flush(data);
  });
});
