import {Action} from '@ngrx/store';
import {Stone} from '../core/model/stones';
import {gauntlet} from './gauntlet.hack';

export interface GauntletState {
  powerStone: Stone;
  spaceStone: Stone;
  realityStone: Stone;
  mindStone: Stone;
  soulStone: Stone;
  timeStone: Stone;
}

export function gauntletReducer(state: GauntletState = gauntlet, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
