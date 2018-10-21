import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, SubtitleComponent, TagComponent],
  exports: [TitleComponent, SubtitleComponent, TagComponent]
})
export class ShareModule { }
