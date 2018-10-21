import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const router: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gauntlet' },
  { path: 'gauntlet', loadChildren: './gauntlet/gauntlet.module#GauntletModule' },
  { path: 'population', loadChildren: './population/population.module#PopulationModule' },
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(router);
