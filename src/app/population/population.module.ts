import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationComponent } from './containers/population/population.component';
import {PopulationRouter} from './population.routing';

@NgModule({
  imports: [
    CommonModule,
    PopulationRouter
  ],
  declarations: [PopulationComponent]
})
export class PopulationModule { }
