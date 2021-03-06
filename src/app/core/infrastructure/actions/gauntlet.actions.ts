import {Action} from '@ngrx/store';
import {Gauntlet} from '../../model/stones';

export const EQUIP = '[Gauntlet] equip';

export const GET_STONES = '[Gauntlet] get stones';
export const GET_STONES_FULFILLED = '[Gauntlet] get stones fulfilled';
export const GET_STONES_REJECTED = '[Gauntlet] get stones rejected';

export const SNAP = '[Gauntlet] snap';

export class Equip implements Action {
  readonly type = EQUIP;
  constructor(public stoneId: string) {}
}
export class GetStones implements Action {
  readonly type = GET_STONES;
  constructor() {}
}

export class GetStonesFulfilled implements Action {
  readonly type = GET_STONES_FULFILLED;
  constructor(public gauntlet: Gauntlet) {}
}

export class GetStonesRejected implements Action {
  readonly type = GET_STONES_REJECTED;
  constructor(public error: string) {}
}

export class Snap implements Action {
  readonly  type = SNAP;
  constructor() {}
}

export type GauntletActions
  = Equip
  | GetStones
  | GetStonesFulfilled
  | GetStonesRejected
  | Snap;
