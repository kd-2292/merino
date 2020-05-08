import { TestBed } from '@angular/core/testing';

import { AllianceService } from './alliance.service';

describe('AllianceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllianceService = TestBed.get(AllianceService);
    expect(service).toBeTruthy();
  });
});
