import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';
import { TagComponent } from './components/tag/tag.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TitleComponent, SubtitleComponent, TagComponent, ButtonComponent, ModalComponent],
  exports: [TitleComponent, SubtitleComponent, TagComponent, ButtonComponent, ModalComponent]
})
export class SharedModule { }
