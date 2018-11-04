import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StoneModel} from '../gauntlet/viewmodel/Stone.model';
import {GauntletMapper} from '../gauntlet/mappers/gauntlet.mapper';
import {GauntletState} from '../reducers/gauntlet.reducer';

export class GauntletSelectors {
  static getGauntletState = createFeatureSelector<GauntletState>('gauntlet');
  static getGauntletAsViewModel = createSelector(GauntletSelectors.getGauntletState,
    (state): StoneModel[] => GauntletMapper.toViewModel(state));
  static isGauntletCompleted = createSelector(GauntletSelectors.getGauntletAsViewModel,
      stones => !!stones.find(stone => !stone.equipped));
}


