import {ActionReducerMap} from '@ngrx/store';
import {gauntletReducer, GauntletState} from './gauntlet.reducer';

export interface State {
  gauntlet: GauntletState;
}

export const reducers: ActionReducerMap<State> = {
  gauntlet: gauntletReducer
};
