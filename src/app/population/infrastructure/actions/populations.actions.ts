import {Action} from '@ngrx/store';

export const GET_POPULATION = '[Population] get';
export const GET_POPULATION_SUCCESS = '[Population] get success';
export const GET_POPULATION_FAIL = '[Population] get fail';

export class GetPopulation implements Action {
  readonly type = GET_POPULATION;
  constructor() {}
}
export class GetPopulationSuccess implements Action {
  readonly type = GET_POPULATION_SUCCESS;
  constructor(public population: number) {}
}
export class GetPopulationFail implements Action {
  readonly type = GET_POPULATION_FAIL;
  constructor() {}
}

export type PopulationAction
  = GetPopulation
  | GetPopulationSuccess
  | GetPopulationFail;
