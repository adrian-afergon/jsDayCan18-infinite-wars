import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationComponent } from './containers/population/population.component';
import {PopulationRouter} from './population.routing';
import {ShareModule} from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PopulationRouter
  ],
  declarations: [PopulationComponent]
})
export class PopulationModule { }
