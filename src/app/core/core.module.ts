import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { CoreRouter } from './app.routing';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { SubtitleComponent } from './components/subtitle/subtitle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreRouter
  ],
  declarations: [HeaderComponent, MainComponent, FooterComponent, TitleComponent, SubtitleComponent],
  exports: [MainComponent]
})
export class CoreModule { }
