import { TestBed } from '@angular/core/testing';

import { BackendAuthGuard } from './backend-auth.guard';

describe('BackendAuthGuard', () => {
  let guard: BackendAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BackendAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
