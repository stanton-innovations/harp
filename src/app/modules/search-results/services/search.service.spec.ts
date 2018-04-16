import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Search Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('gets search results', () => {
    // TODO
  });
});
