import {Stone} from '../core/model/stones';
import {gauntlet} from './gauntlet.hack';
import {EQUIP, GauntletActions, GET_STONES_FULFILLED} from '../actions/gauntlet.actions';

export interface GauntletState {
  powerStone: Stone;
  spaceStone: Stone;
  realityStone: Stone;
  mindStone: Stone;
  soulStone: Stone;
  timeStone: Stone;
}

const defaultState: GauntletState = {
  mindStone: null,
  powerStone: null,
  realityStone: null,
  soulStone: null,
  spaceStone: null,
  timeStone: null
};

export function gauntletReducer(state: GauntletState = defaultState, action: GauntletActions) {
  switch (action.type) {
    case GET_STONES_FULFILLED:
      return {...state, ...action.gauntlet};
    case EQUIP:
      const stone = state[action.stoneId];
      return {...state, [action.stoneId]: {...stone, equipped: !stone.equipped} };
    default:
      return state;
  }
}

