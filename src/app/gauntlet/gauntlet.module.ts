import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GauntletComponent } from './containers/gauntlet/gauntlet.component';
import { GauntletRouter } from './gauntlet.routing';
import { StoneComponent } from './components/stone/stone.component';
import { SharedModule } from '../shared/shared.module';
import { InfinityGauntletComponent } from './components/infinity-gauntlet/infinity-gauntlet.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    GauntletRouter
  ],
  declarations: [GauntletComponent, StoneComponent, InfinityGauntletComponent]
})
export class GauntletModule { }
