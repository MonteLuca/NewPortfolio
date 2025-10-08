import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    OverlayPanelModule,
    RouterModule,
    TagModule,
    TimelineModule,
    ToolbarModule,
    TooltipModule,
    ToastModule,
    SidebarModule
  ],
  exports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    DividerModule,
    OverlayPanelModule,
    TagModule,
    TimelineModule,
    ToolbarModule,
    TooltipModule,
    RippleModule,
    NavbarComponent,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ],
  declarations: [
    NavbarComponent
  ],
})
export class SharedModule {}
