import {Action} from '@ngrx/store';

export const EQUIP = '[Gauntlet] equip';
export const SNAP = '[Gauntlet] snap';

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
