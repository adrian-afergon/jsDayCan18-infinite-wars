import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GauntletComponent } from './containers/gauntlet/gauntlet.component';
import { GauntletRouter } from './gauntlet.routing';
import { StoneComponent } from './components/stone/stone.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    GauntletRouter
  ],
  declarations: [GauntletComponent, StoneComponent]
})
export class GauntletModule { }
