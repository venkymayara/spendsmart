import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { TransactionActions } from './transaction.actions';

@Injectable()
export class TransactionEffects {
  loadTransactions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionActions.loadTransactions),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => TransactionActions.loadTransactionsSuccess({ data })),
          catchError((error) => of(TransactionActions.loadTransactionsFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions) {}
}
