import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Budget } from './budget.model';
import { BudgetActions } from './budget.actions';

export const budgetsFeatureKey = 'budgets';

export interface State extends EntityState<Budget> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Budget> = createEntityAdapter<Budget>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(BudgetActions.addBudget, (state, action) => adapter.addOne(action.budget, state)),
  on(BudgetActions.upsertBudget, (state, action) => adapter.upsertOne(action.budget, state)),
  on(BudgetActions.addBudgets, (state, action) => adapter.addMany(action.budgets, state)),
  on(BudgetActions.upsertBudgets, (state, action) => adapter.upsertMany(action.budgets, state)),
  on(BudgetActions.updateBudget, (state, action) => adapter.updateOne(action.budget, state)),
  on(BudgetActions.updateBudgets, (state, action) => adapter.updateMany(action.budgets, state)),
  on(BudgetActions.deleteBudget, (state, action) => adapter.removeOne(action.id, state)),
  on(BudgetActions.deleteBudgets, (state, action) => adapter.removeMany(action.ids, state)),
  on(BudgetActions.loadBudgets, (state, action) => adapter.setAll(action.budgets, state)),
  on(BudgetActions.clearBudgets, (state) => adapter.removeAll(state)),
);

export const budgetsFeature = createFeature({
  name: budgetsFeatureKey,
  reducer,
  extraSelectors: ({ selectBudgetsState }) => ({
    ...adapter.getSelectors(selectBudgetsState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } = budgetsFeature;
