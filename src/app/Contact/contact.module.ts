import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  providers: [
    MessageService
  ]
})
export class ContactModule { }
