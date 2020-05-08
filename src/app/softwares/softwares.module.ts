import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwaresRoutingModule } from './softwares-routing.module';
import { LandingComponent } from './landing/landing.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [LandingComponent, DetailComponent, FooterComponent],
  imports: [
    CommonModule,
    SoftwaresRoutingModule,
    SharedModule
  ]
})
export class SoftwaresModule { }
