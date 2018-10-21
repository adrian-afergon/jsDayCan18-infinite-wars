import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GauntletComponent} from './containers/gauntlet/gauntlet.component';

const router: Routes = [
  { path: '', component: GauntletComponent}
];

export const GauntletRouter: ModuleWithProviders = RouterModule.forChild(router);
