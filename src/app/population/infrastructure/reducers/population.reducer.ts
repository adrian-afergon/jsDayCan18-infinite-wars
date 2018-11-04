import {Action} from '@ngrx/store';

interface PopulationState {
  people: number;
}

const defaultState: PopulationState = {
  people: 0
};

export function populationReducer(state: PopulationState = defaultState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
