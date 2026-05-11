import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BudgetActions } from './budget.actions';

@Injectable()
export class BudgetEffects {
  loadBudgets$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BudgetActions.loadBudgets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => BudgetActions.loadBudgetsSuccess({ data })),
          catchError((error) => of(BudgetActions.loadBudgetsFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions) {}
}
