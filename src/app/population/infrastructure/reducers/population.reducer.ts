import {GET_POPULATION_SUCCESS, PopulationAction} from '../actions/populations.actions';

export interface PopulationState {
  people: number;
}

const defaultState: PopulationState = {
  people: 0
};

export function populationReducer(state: PopulationState = defaultState, action: PopulationAction) {
  switch (action.type) {
    case GET_POPULATION_SUCCESS:
      return {...state, people: action.population};
    default:
      return state;
  }
}
