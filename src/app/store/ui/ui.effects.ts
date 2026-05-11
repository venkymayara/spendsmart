import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { UiActions } from './ui.actions';

@Injectable()
export class UiEffects {
  loadUis$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UiActions.loadUis),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => UiActions.loadUisSuccess({ data })),
          catchError((error) => of(UiActions.loadUisFailure({ error }))),
        ),
      ),
    );
  });

  constructor(private actions$: Actions) {}
}
