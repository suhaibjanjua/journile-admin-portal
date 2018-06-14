import { TestBed, inject } from '@angular/core/testing';

import { GammaTagService } from './gamma-tag.service';

describe('GammaTagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GammaTagService]
    });
  });

  it('should be created', inject([GammaTagService], (service: GammaTagService) => {
    expect(service).toBeTruthy();
  }));
});
