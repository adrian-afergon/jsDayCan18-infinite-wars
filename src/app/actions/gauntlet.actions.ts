import {Action} from '@ngrx/store';

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

export class Snap implements Action {
  readonly  type = SNAP;
  constructor() {}
}

export type GauntletActions
  = Equip
  | Snap;
