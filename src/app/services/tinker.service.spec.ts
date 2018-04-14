import { TestBed, inject } from '@angular/core/testing';

import { TinkerService } from './tinker.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TinkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TinkerService],
    });
  });

  it('should be created', inject([TinkerService], (service: TinkerService) => {
    expect(service).toBeTruthy();
  }));
});
