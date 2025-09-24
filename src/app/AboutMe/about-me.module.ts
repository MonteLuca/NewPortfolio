import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from '../Shared/shared.module';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

@NgModule({
  declarations: [
    AboutMePageComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule
  ]
})
export class AboutMeModule { }
