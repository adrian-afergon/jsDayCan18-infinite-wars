import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationComponent } from './containers/population/population.component';
import {PopulationRouter} from './population.routing';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {populationReducer} from './infrastructure/reducers/population.reducer';
import {PopulationEffects} from './infrastructure/effects/';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PopulationRouter,
    StoreModule.forFeature('population', populationReducer),
    EffectsModule.forFeature([PopulationEffects])
  ],
  declarations: [PopulationComponent],
})
export class PopulationModule { }
