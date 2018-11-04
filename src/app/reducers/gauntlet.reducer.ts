import {Action} from '@ngrx/store';
import {Stone} from '../core/model/stones';
import {gauntlet} from './gauntlet.hack';
import {EQUIP} from '../actions/gauntlet.actions';

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
    case EQUIP:
      const stone = state[action.payload];
      return {...state, [action.payload]: {...stone, equipped: !stone.equipped} };
    default:
      return state;
  }
}

