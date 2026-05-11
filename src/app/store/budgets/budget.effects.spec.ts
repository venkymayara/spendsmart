import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BudgetEffects } from './budget.effects';

describe('BudgetEffects', () => {
  let actions$: Observable<any>;
  let effects: BudgetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BudgetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
