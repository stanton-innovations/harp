import { TestBed, inject } from '@angular/core/testing';

import { TinkerService } from './tinker.service';

describe('TinkerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TinkerService]
    });
  });

  it('should be created', inject([TinkerService], (service: TinkerService) => {
    expect(service).toBeTruthy();
  }));
});
