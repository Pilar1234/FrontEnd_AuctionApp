import { TestBed } from '@angular/core/testing';

import { UserFormValidationService } from './user-form-validation.service';

describe('UserFormValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFormValidationService = TestBed.get(UserFormValidationService);
    expect(service).toBeTruthy();
  });
});
