import {Action, createFeatureSelector, createSelector} from '@ngrx/store';
import {Stone} from '../core/model/stones';
import {gauntlet} from './gauntlet.hack';
import {GauntletMapper} from '../gauntlet/mappers/gauntlet.mapper';
import {StoneModel} from '../gauntlet/viewmodel/Stone.model';

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

const getGauntletState = createFeatureSelector<GauntletState>('gauntlet');
export const getGauntletAsViewModel = createSelector(getGauntletState, (state): StoneModel[] => GauntletMapper.toViewModel(state));
