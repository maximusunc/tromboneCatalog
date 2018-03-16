import { TestBed, inject } from '@angular/core/testing';

import { TromboneService } from './trombone.service';

describe('TromboneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TromboneService]
    });
  });

  it('should be created', inject([TromboneService], (service: TromboneService) => {
    expect(service).toBeTruthy();
  }));
});
