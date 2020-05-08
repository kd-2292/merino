import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriesRoutingModule } from './industries-routing.module';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  declarations: [LandingComponent, FooterComponent, DetailComponent],
  imports: [
    CommonModule,
    IndustriesRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class IndustriesModule { }
