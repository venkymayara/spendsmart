import { TestBed } from '@angular/core/testing';

import { Upi } from './upi';

describe('Upi', () => {
  let service: Upi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Upi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
