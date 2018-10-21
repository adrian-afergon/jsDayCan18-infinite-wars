import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleComponent} from './components/title/title.component';
import {SubtitleComponent} from './components/subtitle/subtitle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, SubtitleComponent],
  exports: [TitleComponent, SubtitleComponent]
})
export class ShareModule { }
