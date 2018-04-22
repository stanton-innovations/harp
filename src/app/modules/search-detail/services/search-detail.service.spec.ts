import { TestBed, inject } from '@angular/core/testing';

import { SearchDetailService } from './search-detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { api } from '../../search-results/module.constants';

describe('SearchDetailService', () => {
  let service: SearchDetailService;
  let backend: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [SearchDetailService]
    });
    service = TestBed.get(SearchDetailService);
    backend = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets details', () => {
    const data = [{test: 'test'}];

    service
      .get('1')
      .subscribe(results => expect(results).toEqual(data));

    backend
      .match({
        url: `${api.results}/1`,
        method: 'GET'
      })[0]
      .flush(data);
  });
});
