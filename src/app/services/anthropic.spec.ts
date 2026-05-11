import { TestBed } from '@angular/core/testing';

import { Anthropic } from './anthropic';

describe('Anthropic', () => {
  let service: Anthropic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Anthropic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
