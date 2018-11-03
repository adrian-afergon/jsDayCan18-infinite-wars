import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './containers/main/main.component';
import { CoreRouter } from './core.routing';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    CoreRouter
  ],
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  exports: [MainComponent]
})
export class CoreModule { }
