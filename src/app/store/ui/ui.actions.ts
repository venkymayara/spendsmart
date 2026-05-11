import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Ui } from './ui.model';

export const UiActions = createActionGroup({
  source: 'Ui/API',
  events: {
    'Load Uis': props<{ uis: Ui[] }>(),
    'Load Uis Success': props<{ data: Ui[] }>(),
    'Load Uis Failure': props<{ error: any }>(),
    'Add Ui': props<{ ui: Ui }>(),
    'Upsert Ui': props<{ ui: Ui }>(),
    'Add Uis': props<{ uis: Ui[] }>(),
    'Upsert Uis': props<{ uis: Ui[] }>(),
    'Update Ui': props<{ ui: Update<Ui> }>(),
    'Update Uis': props<{ uis: Update<Ui>[] }>(),
    'Delete Ui': props<{ id: string }>(),
    'Delete Uis': props<{ ids: string[] }>(),
    'Clear Uis': emptyProps(),
  },
});
