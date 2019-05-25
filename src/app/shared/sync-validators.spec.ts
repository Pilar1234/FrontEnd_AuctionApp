import { TestBed } from '@angular/core/testing';

import { SyncValidators } from './sync-validators';

describe('ValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncValidators = TestBed.get(SyncValidators);
    expect(service).toBeTruthy();
  });
});
