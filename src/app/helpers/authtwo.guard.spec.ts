import { TestBed } from '@angular/core/testing';

import { AuthtwoGuard } from './authtwo.guard';

describe('AuthtwoGuard', () => {
  let guard: AuthtwoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthtwoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
