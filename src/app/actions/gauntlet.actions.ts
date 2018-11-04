import {Action} from '@ngrx/store';
import {Gauntlet} from '../core/model/stones';

export const EQUIP = '[Gauntlet] equip';

export const GET_STONES = '[Gauntlet] get stones';
export const GET_STONES_FULFILLED = '[Gauntlet] get stones fulfilled';
export const GET_STONES_REJECTED = '[Gauntlet] get stones rejected';

export const SNAP = '[Gauntlet] snap';
export const SNAP_SUCESS = '[Gauntlet] snap success';
export const SNAP_FAIL = '[Gauntlet] snap fail';

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

export class SnapSuccess implements Action {
  readonly  type = SNAP_SUCESS;
  constructor() {}
}

export class SnapFail implements Action {
  readonly  type = SNAP_FAIL;
  constructor() {}
}

export type GauntletActions
  = Equip
  | GetStones
  | GetStonesFulfilled
  | GetStonesRejected
  | Snap
  | SnapSuccess
  | SnapFail;
