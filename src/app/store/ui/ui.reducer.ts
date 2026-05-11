import { createFeature, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Ui } from './ui.model';
import { UiActions } from './ui.actions';

export const uisFeatureKey = 'uis';

export interface State extends EntityState<Ui> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Ui> = createEntityAdapter<Ui>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(UiActions.addUi, (state, action) => adapter.addOne(action.ui, state)),
  on(UiActions.upsertUi, (state, action) => adapter.upsertOne(action.ui, state)),
  on(UiActions.addUis, (state, action) => adapter.addMany(action.uis, state)),
  on(UiActions.upsertUis, (state, action) => adapter.upsertMany(action.uis, state)),
  on(UiActions.updateUi, (state, action) => adapter.updateOne(action.ui, state)),
  on(UiActions.updateUis, (state, action) => adapter.updateMany(action.uis, state)),
  on(UiActions.deleteUi, (state, action) => adapter.removeOne(action.id, state)),
  on(UiActions.deleteUis, (state, action) => adapter.removeMany(action.ids, state)),
  on(UiActions.loadUis, (state, action) => adapter.setAll(action.uis, state)),
  on(UiActions.clearUis, (state) => adapter.removeAll(state)),
);

export const uisFeature = createFeature({
  name: uisFeatureKey,
  reducer,
  extraSelectors: ({ selectUisState }) => ({
    ...adapter.getSelectors(selectUisState),
  }),
});

export const { selectIds, selectEntities, selectAll, selectTotal } = uisFeature;
