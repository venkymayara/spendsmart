import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Transaction } from './transaction.model';

export const TransactionActions = createActionGroup({
  source: 'Transaction/API',
  events: {
    'Load Transactions': props<{ transactions: Transaction[] }>(),
    'Load Transactions Success': props<{ data: Transaction[] }>(),
    'Load Transactions Failure': props<{ error: any }>(),
    'Add Transaction': props<{ transaction: Transaction }>(),
    'Upsert Transaction': props<{ transaction: Transaction }>(),
    'Add Transactions': props<{ transactions: Transaction[] }>(),
    'Upsert Transactions': props<{ transactions: Transaction[] }>(),
    'Update Transaction': props<{ transaction: Update<Transaction> }>(),
    'Update Transactions': props<{ transactions: Update<Transaction>[] }>(),
    'Delete Transaction': props<{ id: string }>(),
    'Delete Transactions': props<{ ids: string[] }>(),
    'Clear Transactions': emptyProps(),
  },
});
