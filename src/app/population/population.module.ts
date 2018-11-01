import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationComponent } from './containers/population/population.component';
import {PopulationRouter} from './population.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PopulationRouter
  ],
  declarations: [PopulationComponent]
})
export class PopulationModule { }
