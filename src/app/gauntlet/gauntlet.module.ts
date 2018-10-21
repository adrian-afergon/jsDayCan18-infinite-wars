import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GauntletComponent } from './containers/gauntlet/gauntlet.component';
import {GauntletRouter} from './gauntlet.routing';

@NgModule({
  imports: [
    CommonModule,
    GauntletRouter
  ],
  declarations: [GauntletComponent]
})
export class GauntletModule { }
