import {Action} from '@ngrx/store';

interface PopulationState {
  population: number;
}

export function populationReducer(state: PopulationState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
