import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    JobsPageComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
