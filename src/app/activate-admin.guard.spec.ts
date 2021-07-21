import { TestBed } from '@angular/core/testing';

import { ActivateAdminGuard } from './activate-admin.guard';

describe('ActivateAdminGuard', () => {
  let guard: ActivateAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
