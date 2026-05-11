import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Budget } from './budget.model';

export const BudgetActions = createActionGroup({
  source: 'Budget/API',
  events: {
    'Load Budgets': props<{ budgets: Budget[] }>(),
    'Load Budgets Success': props<{ data: Budget[] }>(),
    'Load Budgets Failure': props<{ error: any }>(),
    'Add Budget': props<{ budget: Budget }>(),
    'Upsert Budget': props<{ budget: Budget }>(),
    'Add Budgets': props<{ budgets: Budget[] }>(),
    'Upsert Budgets': props<{ budgets: Budget[] }>(),
    'Update Budget': props<{ budget: Update<Budget> }>(),
    'Update Budgets': props<{ budgets: Update<Budget>[] }>(),
    'Delete Budget': props<{ id: string }>(),
    'Delete Budgets': props<{ ids: string[] }>(),
    'Clear Budgets': emptyProps(),
  },
});
