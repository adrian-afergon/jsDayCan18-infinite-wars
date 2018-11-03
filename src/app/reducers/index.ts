import { ActionReducerMap } from '@ngrx/store';
import {Stone} from '../core/model/stones';

interface GauntletState {
  powerStone: Stone;
  spaceStone: Stone;
  realityStone: Stone;
  mindStone: Stone;
  soulStone: Stone;
  timeStone: Stone;
}

export interface State {
  gauntlet: GauntletState;
}

export const reducers: ActionReducerMap<State> = {

};
