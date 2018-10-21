import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { CoreRouter } from './app.routing';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    CoreRouter
  ],
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  exports: [MainComponent]
})
export class CoreModule { }
