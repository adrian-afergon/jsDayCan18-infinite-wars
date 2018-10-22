import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TagComponent } from './components/tag/tag.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, SubtitleComponent, TagComponent, ButtonComponent],
  exports: [TitleComponent, SubtitleComponent, TagComponent, ButtonComponent]
})
export class ShareModule { }
