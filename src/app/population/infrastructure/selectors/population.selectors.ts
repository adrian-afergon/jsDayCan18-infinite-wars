import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PopulationState} from '../reducers/population.reducer';

export class PopulationSelectors {
  static getPopulationState = createFeatureSelector<PopulationState>('population');
  static getConnectedPeople = createSelector(PopulationSelectors.getPopulationState,
    (population): number => population.people);
}
