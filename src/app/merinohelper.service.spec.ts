import { TestBed } from '@angular/core/testing';

import { MerinohelperService } from './merinohelper.service';

describe('MerinohelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MerinohelperService = TestBed.get(MerinohelperService);
    expect(service).toBeTruthy();
  });
});
