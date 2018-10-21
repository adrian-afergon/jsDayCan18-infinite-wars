import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PopulationComponent} from './containers/population/population.component';

const router: Routes = [
  { path: '', component: PopulationComponent}
];

export const PopulationRouter: ModuleWithProviders = RouterModule.forChild(router);
