import {Stone} from '../core/model/stones';
import {gauntlet} from './gauntlet.hack';
import {EQUIP, GauntletActions} from '../actions/gauntlet.actions';

export interface GauntletState {
  powerStone: Stone;
  spaceStone: Stone;
  realityStone: Stone;
  mindStone: Stone;
  soulStone: Stone;
  timeStone: Stone;
}

export function gauntletReducer(state: GauntletState = gauntlet, action: GauntletActions) {
  switch (action.type) {
    case EQUIP:
      const stone = state[action.stoneId];
      return {...state, [action.stoneId]: {...stone, equipped: !stone.equipped} };
    default:
      return state;
  }
}

